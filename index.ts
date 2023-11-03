import { addTS, divTS, slowFibonacciTS } from "./math";
import { addC, divC, slowFibonacciC } from "./math.c";
import { addRust, divRust, slowFibonacciRust } from "./math.rs";
import { measureUtil } from "./measureUtil";

measureUtil(() => addTS(2500000, 2500000), "add in TS")
measureUtil(() => addRust(2500000, 2500000), "add in Rust")
measureUtil(() => addC(2500000, 2500000), "add in C")


measureUtil(() => divTS(98989898, 2), "division in TS")
measureUtil(() => divRust(98989898, 2), "division in Rust")
measureUtil(() => divC(98989898, 2), "division in C")


measureUtil(() => slowFibonacciTS(16), "Fibonacci in TS")
measureUtil(() => slowFibonacciRust(16), "Fibonacci in Rust")
measureUtil(() => slowFibonacciC(16), "Fibonacci in C")




