---
title: "How to build a status page your customers actually trust"
description: "Status pages are one of the top three trust signals enterprise buyers check. Here's what to include, what to leave off, and how to communicate during an incident."
date: 2026-07-02
author: "Kloudfox Team"
category: "Status Pages"
tags: ["status-page", "incidents", "communication"]
---

A great status page does two jobs: it reduces the load on your support team during an incident, and it signals maturity during procurement. A mediocre one does neither. A bad one becomes evidence against you in a churn conversation.

Here's what a status page that customers trust looks like in 2026.

## The minimum viable page

At bare minimum, a public status page must show:

- **Current status of each customer-visible service** — API, dashboard, webhooks, auth, and any user-facing component.
- **The last 90 days of daily uptime bars.**
- **Any open incident with a timeline and short update history.**
- **A subscribe button** (email, RSS, or webhook).

If your page has less than that, it's a marketing badge, not a status page.

## Component modeling

The temptation is to expose your internal service graph — every microservice, every dependency. Resist it. Customers don't know what "OrderIntakeService" is and they don't care.

Instead, expose two to seven **customer-visible components**. Examples that work:

- API
- Dashboard
- Webhooks
- Login and Authentication
- Object Storage
- Public Website

Each component is a rollup of the internal services that back it. Customers see one green dot per component. Your engineers see the tree under the hood.

## What to leave off

- **Internal dependencies your customers can't observe.** If a background job worker is down and users never notice, don't post an incident.
- **Third-party status widgets** (Stripe / GitHub / AWS embedded from your page). They confuse the visual model. Link them separately if you must.
- **Vanity metrics** (requests per second, monitors up). They add noise without helping.

## Communicating during an incident

The first update is the most important. Here's a template that works:

> **Investigating** — We're investigating reports of elevated error rates on the checkout API. Some customers may see 500 errors when submitting orders. Payments already in flight are not affected. Next update in 15 minutes.

That paragraph is doing five things:

1. **Names the problem in plain English.**
2. **Bounds the blast radius** ("some customers", specific to checkout).
3. **Names what's *not* affected** — reduces panic.
4. **Sets an expectation for the next update** — reduces refresh-and-tweet cycles.
5. **Is jargon-free.**

Follow-ups should keep the same shape: state → what changed → next update timing.

## The four incident states

Kloudfox and most modern status page tools use these four:

- **Investigating** — you know something's wrong, you don't know why yet.
- **Identified** — you know the cause.
- **Monitoring** — you've applied a fix, watching to confirm.
- **Resolved** — the incident is closed.

Don't invent new states. Customers have learned this vocabulary; deviating from it costs you readability.

## Custom domain and branding

A status page on `yourbrand.io/status` or `status.yourbrand.io` beats one on `yourbrand.statuspage.io` for one reason: enterprise buyers hate the vendor lock-in signal. If your status page has someone else's brand on it, procurement notices.

Every serious status page tool supports custom domains with automatic TLS. If yours doesn't, that's a signal.

## Subscriber notifications

The whole point of a status page is that customers *don't* have to visit it. When something breaks, they get an email (or RSS, or Slack) automatically.

- **On incident open** — the first update.
- **On every subsequent update** — same content as the page.
- **On resolution** — closing timeline.

Subscribers should be able to filter by component. Enterprise customers usually only care about the API; marketing team members might only care about the public site.

## The MTTA / MTTR you never publish

Some teams publish MTTA and MTTR publicly. Most shouldn't. Reason: the numbers move around based on which incidents you *count*, and the moment you're forced to explain your methodology in a customer call, you've already lost the conversation.

Publish uptime. Keep MTTA/MTTR internal (or share with enterprise customers under NDA if asked).

## Post-incident report ("PIR")

Within 5 business days of a P1 or P2, publish a public PIR:

- What happened (customer impact, blast radius, duration)
- Root cause
- What we did during the incident
- What we're changing to prevent recurrence

PIRs are the single most trust-building content type in SaaS. Cloudflare, GitLab, and Stripe have made an art of them. Copy their format.

## What a great status page signals

Enterprise procurement asks three questions:

1. Do you have a status page?
2. Do you publish post-incident reports?
3. Can I subscribe?

Answering yes to all three is worth a real chunk of ARR. Kloudfox includes all three on the free tier.

## FAQ

**Q: Should I automate incident creation?**
A: For P1/P2, yes — when monitors correlate a customer-facing outage, open an incident automatically. For P3/P4, human judgment is better.

**Q: How often should we update during an incident?**
A: Every 15-30 minutes during active investigation, even if the update is "no change." Silence reads as "they don't know what's happening."

**Q: Should we make the status page password-protected for internal customers?**
A: For B2B with named enterprise accounts, sometimes yes. For SaaS with self-serve signups, publish publicly.
