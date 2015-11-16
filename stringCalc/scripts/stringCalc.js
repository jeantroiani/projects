"use strict";

class StringCalc {

    stringToArray (string, customSplitter) {
        if (customSplitter) {
            return string.split(customSplitter);
        }
        return string.split(/[\n,]/g);
    }

    getCustomDelimeter (stringInput) {
        const endOfDelimeter = stringInput.indexOf("\n");
        return stringInput.slice(2, endOfDelimeter - 1);
    }

    add(stringInput) {
        let delimeter = "";
        // console.log(typeof delimeter);
        if (stringInput == "" || stringInput == null) {
            return 0;
        } else {
            if (stringInput.indexOf("//") === 0) {
                delimeter = this.getCustomDelimeter(stringInput);
            }
            let arrayOfNumbers = this.stringToArray(stringInput, delimeter);
            if (arrayOfNumbers.length == 1) {
                return Number(stringInput[0]);
            } else {
                let sumOfNumbers = 0;
                    for(let i = 0; i < arrayOfNumbers.length; i++) {
                        sumOfNumbers += Number(arrayOfNumbers[i]);
                    }
                return sumOfNumbers;
            }
        }
    }
}
