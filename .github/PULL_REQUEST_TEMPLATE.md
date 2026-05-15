<!--
  Fill in all sections below. Unchecked boxes block merging.

  If this PR is NOT a slice (docs, infra, refactor, etc.), check the escape-hatch
  box in the "Slice lifecycle" section. When that box is checked, the rest of
  that section is skipped by the merge gate.
-->

## Summary

<!-- 1-3 sentences: what does this PR ship and why? -->

## Slice info

<!-- For slice PRs: which slice is this? e.g. "Phase 2 / Sub-Phase 2.2 / Slice 2.2.1 Category Service"
     For non-slice PRs: a short label, e.g. "Docs reorganization", "CI fix", "Refactor". -->

## Design / approach

<!-- For slice PRs: paste the "Design decisions" from the Plan block, link any ADRs.
     For non-slice PRs: brief description of the approach. -->

## Test plan

<!-- How was this verified? Be specific. -->

- [ ] Unit tests added/updated (or N/A — explain why)
- [ ] `make test` passes locally
- [ ] `make lint` passes locally
- [ ] Manual smoke test in Postman / browser (or N/A — explain why)

## Slice lifecycle

- [ ] The work for this PR is not a slice

<!--
  ↑ Check the box above for docs / infra / refactor / non-slice work.
  When checked, the boxes below are skipped by the merge gate.
  For slice PRs, leave the box above unchecked and complete the items below.
-->

- [ ] Plan block removed from the phase file
- [ ] All slice tasks marked `[x]` in the phase file
- [ ] Plan block content copied into the "Summary" / "Design" sections above
- [ ] `docs/roadmap/README.md` updated if sub-phase/phase status changed (or N/A)

## Linked decisions

<!-- ADRs created or referenced in this PR, if any. -->
