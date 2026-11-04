---
title: "SSL certificate monitoring: what to watch, and when to panic"
description: "TLS is table stakes. Certificate expiry, chain validation, and cipher grading are the three things every serious SaaS team should monitor continuously."
date: 2026-07-01
author: "Kloudfox Team"
category: "Security"
tags: ["ssl", "tls", "security", "monitoring"]
---

Almost every catastrophic-looking outage that ends in "we forgot to renew the cert" was preventable with about $0 of tooling and 15 minutes of setup. SSL monitoring isn't glamorous, but it's the highest ROI kind of monitoring there is.

**TL;DR** — Watch expiry, chain integrity, cipher grade, and post-renewal validity. Automated ACME renewal is not a substitute for monitoring — it's an input to it. Both need to work.

## Why "we use auto-renewal" isn't enough

Let's Encrypt and ACME renewal are wonderful. They also fail silently in more ways than most teams expect:

- ACME challenge fails because DNS was updated but not propagated.
- Load balancer picks up the new cert on one node but not another.
- Wildcard cert issued but not deployed to the CDN.
- Cross-signed intermediate expires; new cert is fine but chain isn't served.
- Renewal succeeds but old cert is cached at the edge for hours.

Auto-renewal is the *renewal* part. Monitoring is the *did it work* part. You need both.

## The four things to monitor

### 1. Expiry countdown

The easiest and most valuable. Configure countdown alerts at 30, 14, 7, 3, and 1 day. If your renewal process is healthy, only the 30-day alert should ever fire — and it fires as a "renewal detected, closing" event, not an incident.

If the 7-day alert fires, something in your renewal path is broken. Investigate immediately.

### 2. Chain validation

A certificate is a chain: your leaf cert, one or more intermediates, and a root. Browsers get unhappy if any link is missing or expired. Chain issues are why "the cert renewed but Chrome still shows a warning" happens.

Continuous chain validation catches:

- Missing intermediates (`unable to get local issuer certificate`)
- Expired intermediates (rare but happens)
- Wrong intermediate served (a common misconfiguration)

### 3. Cipher and protocol grade

TLS 1.3 is standard in 2026. If your server still supports SSLv3 or TLS 1.0, it's failing basic security audits. Monitor for:

- **Protocol versions offered** — TLS 1.2 minimum, 1.3 preferred.
- **Cipher suites** — no CBC without HMAC, no RC4, no export ciphers.
- **HSTS** — enabled with a reasonable max-age.
- **OCSP stapling** — enabled if you care about revocation latency.

Kloudfox and SSL Labs grade this the same way. If you're not A- or better, you have work to do.

### 4. Post-renewal freshness

After every renewal, your monitoring should confirm the new cert is:

- Served by every load balancer node
- Cached correctly at the CDN
- Trusted from every probed region

This last one catches the sneaky case where your cert works fine in North America but a stale CDN cache in Europe serves the old expired cert for two hours.

## When to panic

**Panic** — expiry in less than 24 hours and no renewal in flight. This is a fire drill. Cancel your afternoon meetings.

**Investigate immediately** — chain validation fails from any region. Even one region is a customer visible problem.

**Investigate this week** — cipher grade dropped from A to B. Not urgent, but audit-relevant.

**File a ticket** — HSTS header missing on a domain that should have it. Non-urgent, but a small win to close out.

## Wildcards

Wildcard certs (`*.example.com`) cover every subdomain matching the pattern. They're convenient, but two gotchas:

1. **Wildcards don't nest.** `*.example.com` covers `api.example.com` but not `v2.api.example.com`.
2. **A single wildcard failure is a blast radius across every subdomain.** Monitor each hostname independently — Kloudfox validates the served cert per hostname even under a single wildcard monitor.

## What to log

For every SSL check, retain:

- Fingerprint (SHA-256)
- Not-before and not-after dates
- Issuer common name
- Full chain (encoded, small)
- Cipher offered on this session
- Response time

This log has saved countless "when did this cert change" investigations.

## The five-minute setup

If you have a Kloudfox account:

1. Add every hostname you serve as an SSL monitor.
2. Set expiry alerts at 30, 14, 7, 3, 1 days.
3. Enable chain validation and cipher grading.
4. Route alerts to your on-call Slack channel.
5. Add a status-page component for TLS and subscribe your enterprise customers.

That's it. Twelve months from now you'll be the only company on your competitive shortlist that has never had a padlock incident.

## FAQ

**Q: How often should SSL be checked?**
A: Hourly is enough for expiry and chain. Cipher grading can run daily.

**Q: Does SSL monitoring add cost or load?**
A: Effectively zero. Certificate reads are cached at the edge; probes are lightweight.

**Q: Do I need SSL monitoring if I use Cloudflare's Universal SSL?**
A: Yes. Cloudflare's cert covers Cloudflare's edge. If your origin cert or a partner's subdomain cert breaks, Cloudflare will happily serve the wrong thing until someone tells it not to.
