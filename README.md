# bun-measurements

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.7. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Overview

I implemented some math operations in C, Rust and Typescript and then I'm testing the performance of the functions, using Hyperimport package to import the functions in the index.ts.

## Some results

| Operation | Language | Time in Nanoseconds |
| --------- | -------- | ------------------- |
| Sum       | TS       | 37.267              |
| Sum       | Rust     | 78.491              |
| Sum       | C        | 35.988              |
| Division  | TS       | 26.862              |
| Division  | Rust     | 42.995              |
| Division  | C        | 3.1037              |
| Fibonacci | TS       | 305.418             |
| Fibonacci | Rust     | 87.000              |
| Fibonacci | C        | 36.513              |

## Todo

import zig functions and in the future and other languages!
