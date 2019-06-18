describe ("Add", function() {
    
        let result = new Calculator();
    
    it ("add two numbers", function() {
        let result = new Calculator();

         expect(result.add(1, 2)).toBe(3);
    });
})

it ("should return the last result", function() {
    let result = new Calculator();
    expect(result.add(1, 2)).toBe(3);
    expect(result.lastResult()).toBe(3);
})

it ("should add any number with the last result", function() {
    let result = new Calculator();
    expect(result.add(1, 2)).toBe(3);
    expect(result.lastResult()).toBe(3);
    expect(result.add(result.lastResult(), 8)).toBe(11);
})

it ("should be able to save the last value in a slot", function() {
    let result = new Calculator();
    expect(result.add(1, 2)).toBe(3);
    expect(result.lastResult()).toBe(3);
    expect(result.add(result.lastResult(), 8)).toBe(11);
    expect(result.set_slot(1)).toBe(11);
})

it ("should be able to get the last value in a slot", function() {
    let result = new Calculator();
    expect(result.add(1, 2)).toBe(3);
    expect(result.lastResult()).toBe(3);
    expect(result.add(result.lastResult(), 8)).toBe(11);
    expect(result.set_slot(1)).toBe(11);
    expect(result.get_slot(1)).toBe(11);
})

it ("should be able to add the saved slot with any number given", function() {
    let result = new Calculator();
    expect(result.add(1, 2)).toBe(3);
    expect(result.lastResult()).toBe(3);
    expect(result.add(result.lastResult(), 8)).toBe(11);
    expect(result.set_slot(1)).toBe(11);
    expect(result.get_slot(1)).toBe(11);
    expect(result.add(result.get_slot(1), 5)).toBe(16);
})

describe ("Multiply", function() {
    let result = new Calculator();

it ("should multiply two numbers", function() {
    let result = new Calculator();
    expect(result.multiply(4, 5)).toBe(20);
});
})

 it ("should return the last result", function() {
     let result = new Calculator();
    expect(result.multiply(4, 5)).toBe(20);
    expect(result.lastResult()).toBe(20);
   
})

it ("should multiply any number given with the last result", function() {
    let result = new Calculator();
    expect(result.multiply(4, 5)).toBe(20);
    expect(result.lastResult()).toBe(20);
    expect(result.multiply(result.lastResult(), 5)).toBe(100);
})

it ("should be able to save the last value in a slot", function() {
    let result = new Calculator();
    expect(result.multiply(4, 5)).toBe(20);
    expect(result.lastResult()).toBe(20);
    expect(result.multiply(result.lastResult(), 5)).toBe(100);
    expect(result.set_slot(1));
})

it ("should be able to get the last value in a slot", function() {
    let result = new Calculator();
    expect(result.multiply(4, 5)).toBe(20);
    expect(result.lastResult()).toBe(20);
    expect(result.multiply(result.lastResult(), 5)).toBe(100);
    expect(result.set_slot(1)).toBe(100);
    expect(result.get_slot(1)).toBe(100);
})

it ("should be able to multiply the saved slot with any number given", function() {
    let result = new Calculator();
    expect(result.multiply(4, 5)).toBe(20);
    expect(result.lastResult()).toBe(20);
    expect(result.multiply(result.lastResult(), 5)).toBe(100);
    expect(result.set_slot(1)).toBe(100);
    expect(result.get_slot(1)).toBe(100);
    expect(result.multiply(result.get_slot(1), 2)).toBe(200);
})
