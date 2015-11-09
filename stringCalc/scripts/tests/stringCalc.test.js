describe("A string calculator", function () {
    beforeEach(function(){
        stringCalc = new StringCalc();
    });

    it("can be instantiated", function () {
        expect(typeof stringCalc == "object").toEqual(true);
    });

    it("can be called with an empty string and return zero", function () {
        expect(stringCalc.add("")).toEqual(0);
    });

    it("can be called with one number and return same number", function () {
        expect(stringCalc.add("1")).toEqual(1);
    });

    it("can be called with 3 number and return 3", function () {
        expect(stringCalc.add("3")).toEqual(3);
    });

    it("can be called with two numbers separated by comma and returns the sum of them", function () {
        expect(stringCalc.add("1,2")).toEqual(3);
    });

    it("can be called with two numbers, 2 and 3 separated by comma and returns the sum of them", function () {
        expect(stringCalc.add("2,3")).toEqual(5);
    });

    it("can be called with any amount of numbers 1, 2 and 3 separated by comma and it returns the sum of them", function () {
        expect(stringCalc.add("1,2,3")).toEqual(6);
    });

    it("can be called with any numbers separated by new lines, and returns the sum of them", function () {
        expect(stringCalc.add("1\n2,3")).toEqual(6);
    });
});
