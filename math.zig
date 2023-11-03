pub fn addZ(a: i32, b: i32) i32 {
    return a + b;
}

pub fn divZ(a: i32, b: i32) !i32 {
    if (b == 0) {
        return error.Unreachable;
    }
    return a / b;
}

pub fn slowFibonacciZ(n: i32) i32 {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return slowFibonacciZ(n - 1) + slowFibonacciZ(n - 2);
    }
}