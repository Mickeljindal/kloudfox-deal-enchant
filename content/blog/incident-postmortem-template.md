---
title: "The incident postmortem template we actually use"
description: "A copy-and-paste postmortem structure that respects your engineers' time, produces real action items, and doesn't turn into blame theater."
date: 2026-07-03
author: "Kloudfox Team"
category: "Incidents"
tags: ["postmortem", "incidents", "sre", "process"]
---

A bad postmortem template turns a real learning opportunity into a bureaucratic ritual. A good one does the opposite — it captures the truth, produces a shortlist of concrete changes, and takes the emotional charge out of a stressful event.

Here's the template we've refined over hundreds of incident retros. Copy it. Adapt it. Delete the sections that don't fit.

## The one-line summary

Before anything else, one sentence:

> On [DATE], from [TIME] to [TIME], customers using [FEATURE] experienced [SYMPTOM] because [ROOT CAUSE]. Impact was [BLAST RADIUS].

If you can't write that sentence in twenty minutes, the postmortem isn't ready. Keep interviewing until you can.

## The full template

### 1. Summary
- **Duration:** start UTC → end UTC (mm:ss)
- **Severity:** P0 / P1 / P2 / P3
- **Affected components:** as they'd appear on your status page
- **Customer impact:** number of accounts, percent of traffic, dollar impact if measurable
- **Data loss:** yes / no / partial

### 2. Timeline
Every entry has a UTC timestamp and one line. No commentary, just facts.

- 14:31 — Kloudfox monitor `checkout-api` opens incident, error rate 8% from us-east
- 14:32 — Slack #war-checkout created, on-call joins
- 14:34 — Root cause hypothesis: payment SDK v3.4 shipped 12 minutes prior
- 14:37 — Rollback initiated
- 14:41 — Error rate returns to baseline
- 14:44 — Incident marked resolved

Timelines that read like this are what auditors and enterprise procurement teams love.

### 3. Root cause

Two to three paragraphs. Not longer. Cover:

- What *technically* broke
- Why the change that caused it made it to production without catching the issue
- What safety net(s) failed to catch it

Avoid "human error." Human error is almost always a systems failure with a person at the interface.

### 4. What went well

At least three things. If you can't find three, you're being uncharitable.

- Monitor detected within 60 seconds of first error
- On-call acknowledged within 45 seconds
- Rollback tooling worked as designed
- Slack war-room reduced coordination overhead

Postmortems that skip this section produce culture problems.

### 5. What didn't go well

Also at least three. Honest.

- Change was deployed without staging validation
- Rollback took 4 minutes instead of the target 60 seconds — deploy pipeline was queued
- No public status page update until 8 minutes in

### 6. Where we got lucky

The most important section, and the most often skipped.

- The bug only affected checkout, not signup — signup regression would have been much harder to detect
- We were awake when it happened — happening at 03:00 UTC would have added ~20 minutes to MTTR

Luck sections force you to think about the counterfactual. They're where the best action items come from.

### 7. Action items

Each action item has:

- **Owner** (a person, not a team)
- **Due date** (a real one, not "Q3")
- **Priority** (P1 to P3)
- **Type** (prevention, detection, mitigation, or process)

Example:

- [P1, prevention, alice@, due 2026-07-11] Require staging soak time ≥ 30 minutes before prod deploy for `payments/*`.
- [P2, detection, bob@, due 2026-07-25] Add per-endpoint anomaly monitor for `POST /checkout` — target 30s MTTD.
- [P3, mitigation, carol@, due 2026-08-15] Pre-warm CDN cache with rollback artifacts to shorten future rollbacks.

Every action item has to be closable. "Improve deploy process" is not an action item.

## Anti-patterns to kill

**Blame framing.** "Alice pushed the change" is factual and useful. "Alice caused the outage" is neither.

**Vague action items.** If a Jira ticket can't be closed with a checkable outcome, it's decoration.

**Too many action items.** Ten action items means one gets done. Ship three.

**No follow-up review.** Postmortems that aren't re-visited in the next sprint retrospective are performance, not process.

## The 90-day follow-up

Every postmortem gets a 90-day review. Someone opens the PM again and asks:

- Did each action item ship? If not, why?
- Did any subsequent incident share a root cause with this one? If yes, why didn't we prevent it?
- Do the action items we did ship look like they worked?

Teams that do this quarterly see recurring incident types collapse within 6-9 months. Teams that don't, don't.

## Automating the draft

Kloudfox drafts the first version of the postmortem automatically from the incident timeline, Slack transcript, and monitor lineage. You edit; you don't create.

That single change cut our own postmortem completion time from ~90 minutes to ~25.

## FAQ

**Q: Should postmortems be public?**
A: For P0/P1 incidents affecting customer-facing components, publish a customer-friendly version (skip internal action-item details).

**Q: Who runs the postmortem meeting?**
A: Not the on-call responder. Someone who wasn't in the incident — an SRE lead or manager. Distance improves clarity.

**Q: How long should the meeting be?**
A: 30-45 minutes. If it runs longer, the timeline wasn't ready.
