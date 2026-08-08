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
| `grid-flow-row` | `grid-auto-flow: row` |
| `grid-flow-col` | `grid-auto-flow: column` |
| `grid-flow-dense` | `grid-auto-flow: dense` |
