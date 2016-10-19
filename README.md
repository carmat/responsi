# Responsi

A Responsive, Responsible CSS Grid.

## Open-Source Acceptance Criteria

* Mobile-first approach, i.e. columns should initially be stacked, before resolving to their intended grid layout at larger viewports.
* Columns should not have any inner padding in order to allow for the component utilising the grid for layout.
  * A modifier class can be used to add padding per use-case.
* Pre-defined, but eventually customiseable, breakpoints
  * Suggestions: 320, 480, 768, 960

## Nice-to-have Additions
* Short-hand classes would be an advantage e.g. `half`, `two-thirds`, `full`.
* Mobile/Tablet classes that are triggered only by certain `@media` queries.
* "Push" and "pull" classes to allow for intentional "white-space" where required.
