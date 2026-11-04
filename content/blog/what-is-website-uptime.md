---
title: "What is website uptime, really? A practical explanation for busy teams"
description: "Uptime isn't just a percentage on a status page. Here's what actually counts as 'up', how it's measured, and why 99.9% is not what most vendors claim."
date: 2026-06-28
updated: 2026-06-28
author: "Kloudfox Team"
category: "Fundamentals"
tags: ["uptime", "monitoring", "sla"]
featured: true
---

Every SaaS vendor promises 99.9% uptime. Nearly none of them define, in precise terms, what "up" actually means. That gap is where every bad SLA argument lives.

**TL;DR** — Uptime is the fraction of time your service can serve a real user's real request from their actual location. It is *not* whether your load balancer returns 200. Anything less than that definition will let a vendor claim four nines while your customers watch a spinner.

## The formal definition

Website uptime is time available divided by time observed, measured from a location and network your customer actually uses. A monitoring probe from inside your own VPC checking `GET /health` is a health check — useful, but not uptime. Real uptime is measured from outside, through your CDN, DNS, TLS handshake, and application stack.

The result is a number between 0 and 1 (typically expressed as a percentage). 99.9% uptime is 43 minutes 12 seconds of allowed downtime per month. 99.99% is 4 minutes 20 seconds. 99.999% ("five nines") is about 26 seconds.

## What actually counts as "down"

The industry consensus, and the definition we use at Kloudfox:

- **DNS resolution failure** — your name doesn't resolve.
- **TCP or TLS handshake failure** — the connection can't be established.
- **HTTP 5xx** — the server responded, but with a server-side error.
- **HTTP 4xx** *on a page that should exist* — often a broken deploy.
- **Content assertion failure** — the response returned 200, but the page is empty, corrupted, or a soft-error state.
- **Latency exceeding the SLO threshold** — technically responsive, practically unusable.

Notice what's not on this list: a single missed check. One dropped probe in a five-second window is almost always a network blip. Uptime is a *sustained* condition, not an instant one.

## How Kloudfox measures it

Every monitor produces a per-second boolean: was the service reachable, correct, and fast enough? We aggregate that stream in 30-second buckets. A bucket is "down" only when two consecutive probes from at least two regions confirm the same failure.

This deliberately trades a small amount of MTTD for near-zero false positives. If your CDN edge in Frankfurt hiccups for 45 seconds but the rest of the world is fine, that's a region incident on your CDN, not your service. Your SLA math should reflect that.

## Why "vendor uptime" and "customer uptime" diverge

A common failure mode: your vendor's status page shows 100% green, but your customers are hitting errors. Reasons this happens:

1. **Third-party regressions the vendor doesn't own.** A CDN cache poisoning event or a DNS provider incident isn't in the vendor's monitored surface.
2. **Regional degradation.** The vendor probes globally and averages; your customers are concentrated in the one region that's slow.
3. **Feature-level breakage.** Home page is fine; checkout is 500'ing. The vendor's synthetic probes hit `/`, not `/checkout`.

The fix is monitoring that reflects *your* customer footprint. Probe from the regions your users live in. Assert on the endpoints they hit. Read the response bodies for the states they care about.

## The uptime you actually want

For most SaaS teams, three nines (99.9%) is a reasonable, achievable, and honestly-marketable target. Four nines (99.99%) is expensive but doable with proper redundancy. Five nines is a specialty problem — planetary CDN, active-active regions, chaos engineering. Anything higher is marketing.

More important than the number: what's your **MTBF** (mean time between failures), your **MTTA** (mean time to acknowledge), and your **MTTR** (mean time to recover)? A team with 99.9% uptime and a 4-minute MTTR is in a healthier place than one with 99.95% uptime and a 45-minute MTTR.

## What to do with this

- **Publish the definition.** Whatever "up" means in your SLA, spell it out. Your enterprise customers will thank you.
- **Measure from customer geography.** Not your data center.
- **Alert on sustained failure, not single misses.** Consecutive-checks-across-regions is the industry norm.
- **Track MTTA and MTTR, not just uptime.** Recovery velocity matters more than raw availability once you're above three nines.

Uptime is a design choice, not a spreadsheet cell. When the definition is precise, the number becomes something both engineering and sales can point at with a straight face.

## FAQ

**Q: Is 99.9% uptime good?**
A: For most B2B SaaS, yes. It's the widely-accepted floor. Consumer services and financial infrastructure typically aim higher.

**Q: How is uptime calculated when I have multi-region deployment?**
A: The rigorous answer is a per-region uptime that rolls into a customer-experienced uptime. Kloudfox reports both and lets you choose which drives your SLA.

**Q: Do partial outages count against my SLA?**
A: In modern SLAs, yes — proportional to the fraction of customers affected. Feature-flag-controlled partial rollouts should be measured accordingly.
