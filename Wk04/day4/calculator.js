class Calculator {
    constructor(total) {
        this.total = 0;
    }

    add(num) {
        return this.total += num;
    }

    subtract(num) {
        return this.total -= num;
    }

    divide(num) {
        return this.total /= num;
    }

    multiply(num) {
        return this.total *= num;
    }
}

module.exports = Calculator;