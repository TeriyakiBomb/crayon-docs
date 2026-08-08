### Grid Display

| **Class** | **Property**    |
| --------- | --------------- |
| `grid`    | `display: grid` |

### Grid Template Columns

| **Class**                     | **Property**                                         |
| ----------------------------- | ---------------------------------------------------- |
| `grid-cols-{n}` (`1` to `12`) | `grid-template-columns: repeat({n}, minmax(0, 1fr))` |
| `grid-cols-none`              | `grid-template-columns: none`                        |

### Grid Template Rows

| **Class**                     | **Property**                                      |
| ----------------------------- | ------------------------------------------------- |
| `grid-rows-{n}` (`1` to `12`) | `grid-template-rows: repeat({n}, minmax(0, 1fr))` |
| `grid-rows-none`              | `grid-template-rows: none`                        |

### Grid Column Span

| **Class**                    | **Property**                       |
| ---------------------------- | ---------------------------------- |
| `col-span-{n}` (`1` to `12`) | `grid-column: span {n} / span {n}` |
| `col-span-full`              | `grid-column: 1 / -1`              |

### Grid Row Span

| **Class**                    | **Property**                    |
| ---------------------------- | ------------------------------- |
| `row-span-{n}` (`1` to `12`) | `grid-row: span {n} / span {n}` |
| `row-span-full`              | `grid-row: 1 / -1`               |

### Grid Auto Columns

| **Class**        | **Property**                        |
| ---------------- | ----------------------------------- |
| `auto-cols-auto` | `grid-auto-columns: auto`           |
| `auto-cols-min`  | `grid-auto-columns: min-content`    |
| `auto-cols-max`  | `grid-auto-columns: max-content`    |
| `auto-cols-fr`   | `grid-auto-columns: minmax(0, 1fr)` |

### Grid Auto Rows

| **Class**        | **Property**                     |
| ---------------- | -------------------------------- |
| `auto-rows-auto` | `grid-auto-rows: auto`           |
| `auto-rows-min`  | `grid-auto-rows: min-content`    |
| `auto-rows-max`  | `grid-auto-rows: max-content`    |
| `auto-rows-fr`   | `grid-auto-rows: minmax(0, 1fr)` |

### Grid Auto Flow

| **Class**             | **Property**                   |
| --------------------- | ------------------------------ |
| `grid-flow-row`       | `grid-auto-flow: row`          |
| `grid-flow-col`       | `grid-auto-flow: column`       |
| `grid-flow-dense`     | `grid-auto-flow: dense`        |
| `grid-flow-row-dense` | `grid-auto-flow: row dense`    |
| `grid-flow-col-dense` | `grid-auto-flow: column dense` |
