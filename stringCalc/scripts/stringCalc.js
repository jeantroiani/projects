"use strict";

class StringCalc {

    stringToArray (string) {
        return string.split(/[\n,]/g);
        return string.split(",");
    }

    add(stringInput) {
        if (stringInput == "" || stringInput == null) {
            return 0;
        } else {
            let arrayOfNumbers = this.stringToArray(stringInput);
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
