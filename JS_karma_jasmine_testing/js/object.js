if (typeof NS == "undefined") { NS = {}; }

NS.myFunction = {
    stuff: [],

    init: function init () {
        this.stuff.push("Testing");
    },

    reset: function reset () {
        this.stuff = [];
    },

    append: function append (stringA, stringB) {
        return stringA + " " + stringB;
    }
};
NS.myFunction.init();
