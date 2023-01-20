const Calculator = require('./calculator');

class FancyCalculator extends Calculator {
    constructor(total) {
        this.total = total;
    }

    setTotal(newTotal) {
        this.total = newTotal;
        return this.total;
    };

    modulo(num) {
        this.total %= num;
        return this.total;
    }

    squared() {
        return this.total *= this.total;
    }
};

module.exports = FancyCalculator;