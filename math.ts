export const addTS = (a: number, b: number): number => a + b

export const divTS = (a: number, b: number): number => a / b

export function slowFibonacciTS(n: number): number {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return slowFibonacciTS(n - 1) + slowFibonacciTS(n - 2);
    }
}