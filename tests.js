// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});


//Unit tests for the sayHello function
describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
    expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
    expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello("World")).toBe("Hello, World!");
    });
    it('should return the input "null" when executed', function () {
        expect(sayHello(null)).toBe(null);
    });
    it('should return the string "" when executed', function () {
    expect(sayHello("")).toBe("");
    });
    it('should return the number inside a string "5" when executed', function () {
    expect(sayHello("5")).toBe("5");
    });
    it('should return the number "2.3" when executed', function () {
    expect(sayHello(2.3)).toBe(2.3);
    });
    it('should return the array "[2,3,4]" when executed', function () {
    expect(sayHello('2,3,4')).toBe("array");
    });
});























