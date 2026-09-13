| Mixin | CSS properties |
| --- | --- |
| `grid` | `display: grid` |
| `grid-cols($num)` | `grid-template-columns: repeat($num, minmax(0, 1fr))` |
| `grid-cols-none` | `grid-template-columns: none` |
| `grid-rows($num)` | `grid-template-rows: repeat($num, minmax(0, 1fr))` |
| `grid-rows-none` | `grid-template-rows: none` |
| `col-span($num)` | `grid-column: span $num / span $num` |
| `col-span-full` | `grid-column: 1 / -1` |
| `row-span($num)` | `grid-row: span $num / span $num` |
| `row-span-full` | `grid-row: 1 / -1` |
| `auto-cols-auto` | `grid-auto-columns: auto` |
| `auto-cols-min` | `grid-auto-columns: min-content` |
| `auto-cols-max` | `grid-auto-columns: max-content` |
| `auto-cols-fr` | `grid-auto-columns: minmax(0, 1fr)` |
| `auto-rows-auto` | `grid-auto-rows: auto` |
| `auto-rows-min` | `grid-auto-rows: min-content` |
| `auto-rows-max` | `grid-auto-rows: max-content` |
| `auto-rows-fr` | `grid-auto-rows: minmax(0, 1fr)` |
| `grid-flow-row` | `grid-auto-flow: row` |
| `grid-flow-col` | `grid-auto-flow: column` |
| `grid-flow-dense` | `grid-auto-flow: dense` |
| `grid-flow-row-dense` | `grid-auto-flow: row dense` |
| `grid-flow-col-dense` | `grid-auto-flow: column dense` |
