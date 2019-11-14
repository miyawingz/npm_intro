export const add = function (x, y) {
    return x + y;
}

export const subtract = (x, y) => {
    return x - y;
}

export const multiply = (x, y) => x * y;

export const div = (x, y) => y ? x / y : "cant divided by zero";

export const divide = (x, y) => {
    if (!y) {
        return "cant divide by zero"
    } else {
        return x / y;
    }
};

export default (num1, op, num2) => {
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        default:
            return "unknown";
    }
}