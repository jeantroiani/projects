if (typeof NS == "undefined") { NS = {}; }

NS.myFunction = {
    stuff: [],

    init: function init () {
        this.stuff.push("Testing");
    },

    reset: function reset () {
        this.stuff = [];
    },
};
NS.myFunction.init();
