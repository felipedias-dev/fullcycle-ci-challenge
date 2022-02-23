function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function times(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function pow(a, b) {
    if (!b) return 1;

    let result = a;

    for (let counter = 1; counter < b; counter++) {
        result *= a;    
    }

    return result;
}

module.exports = { sum, sub, times, div, pow }