class Calculator {
    constructor() {
        this.slot = []
    }
    add() {
        let result = 0;
        for (let i = 0; i < arguments.length; i++) {
            result += arguments[i];
            this.lastValue = result
        }
        return result;
    }

    multiply() {
        let result = 1;
        for (let i = 0; i < arguments.length; i++) {
            result *= arguments[i];
            this.lastValue = result
        }
        return result;
    }

    lastResult() {
        return this.lastValue
    }

    set_slot(a) {
        this.slot.push(this.lastValue)
        return this.slot[a - 1]
    }

    get_slot(a) {
        this.slot.push(this.lastValue)
        return this.slot[a - 1]
    }
}

    let str = new Calculator();

    str.add(1, 2)
    str.lastResult()
    str.add(str.lastResult(), 8)
    str.multiply(4, 5)
    str.lastResult()
    str.multiply(str.lastResult(), 5)
    str.set_slot(1)
    str.get_slot(1)
    str.add(str.get_slot(1), 6)
    str.multiply(str.get_slot(1), 2)