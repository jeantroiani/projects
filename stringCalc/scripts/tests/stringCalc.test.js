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
        expect(stringCalc.add(1)).toEqual(1);
    });


});
