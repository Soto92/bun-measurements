#include <stdio.h>

int addC(int a, int b) {
    return a + b;
}

int divC(int a, int b) {
    if (b == 0) {
        fprintf(stderr, "Division by zero is not allowed\n");
        return 0;
    }
    return a / b;
}

int slowFibonacciC(int n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return slowFibonacciC(n - 1) + slowFibonacciC(n - 2);
    }
}