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

```
Call to add in TS took 25373 nanoseconds.
Result: 5000000
Call to add in Rust took 72935 nanoseconds.
Result: 5000000
Call to add in C took 17666 nanoseconds.
Result: 5000000
Call to division in TS took 16530 nanoseconds.
Result: 49494949
Call to division in Rust took 31479 nanoseconds.
Result: 49494949
Call to division in C took 19739 nanoseconds.
Result: 49494949
Call to Fibonacci in TS took 188075 nanoseconds.
Result: 987
Call to Fibonacci in Rust took 58600 nanoseconds.
Result: 987
Call to Fibonacci in C took 23134 nanoseconds.
Result: 987
```

## Todo

import zig functions and in the future and other languages!
