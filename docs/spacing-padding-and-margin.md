# Spacing, padding and margins

The spacing scale is built on `$base-size` (4px by default). Size 4 = 4 × 4px = 16px = 1rem. 

Every step in the spacing scale is also available as a CSS variable  `--size-4`, `--size-8`, `--size-0_5`

## Utility classes

### Padding

| **Class**   | **Property**                                  |
| ----------- | --------------------------------------------- |
| `p-{size}`  | `padding: {size}`                             |
| `px-{size}` | `padding-left: {size}; padding-right: {size}` |
| `py-{size}` | `padding-top: {size}; padding-bottom: {size}` |
| `pt-{size}` | `padding-top: {size}`                         |
| `pr-{size}` | `padding-right: {size}`                       |
| `pb-{size}` | `padding-bottom: {size}`                      |
| `pl-{size}` | `padding-left: {size}`                        |

### Margin

| **Class**    | **Property**                                  |
| ------------ | --------------------------------------------- |
| `m-{size}`   | `margin: {size}`                              |
| `mx-{size}`  | `margin-left: {size}; margin-right: {size}`   |
| `my-{size}`  | `margin-top: {size}; margin-bottom: {size}`   |
| `mt-{size}`  | `margin-top: {size}`                          |
| `mr-{size}`  | `margin-right: {size}`                        |
| `mb-{size}`  | `margin-bottom: {size}`                       |
| `ml-{size}`  | `margin-left: {size}`                         |
| `-m-{size}`  | `margin: -{size}`                             |
| `-mx-{size}` | `margin-left: -{size}; margin-right: -{size}` |
| `-my-{size}` | `margin-top: -{size}; margin-bottom: -{size}` |
| `-mt-{size}` | `margin-top: -{size}`                         |
| `-mr-{size}` | `margin-right: -{size}`                       |
| `-mb-{size}` | `margin-bottom: -{size}`                      |
| `-ml-{size}` | `margin-left: -{size}`                        |
| `m-auto`     | `margin: auto`                                |
| `mx-auto`    | `margin-left: auto; margin-right: auto`       |
| `my-auto`    | `margin-top: auto; margin-bottom: auto`       |
| `mt-auto`    | `margin-top: auto`                            |
| `mr-auto`    | `margin-right: auto`                          |
| `mb-auto`    | `margin-bottom: auto`                         |
| `ml-auto`    | `margin-left: auto`                           |

### Gap

| **Class**      | **Property**         |
| -------------- | -------------------- |
| `gap-{size}`   | `gap: {size}`        |
| `gap-x-{size}` | `column-gap: {size}` |
| `gap-y-{size}` | `row-gap: {size}`    |
