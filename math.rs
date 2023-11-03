#[no_mangle]
pub extern "C" fn addRust(a: isize, b: isize) -> isize {
    a + b
}

#[no_mangle]
pub extern "C" fn divRust(a: isize, b: isize) -> isize {
    a / b
}

#[no_mangle]
fn slowFibonacciRust(n: u64) -> u64 {
    if n == 0 {
        0
    } else if n == 1 {
        1
    } else {
        slowFibonacciRust(n - 1) + slowFibonacciRust(n - 2)
    }
}