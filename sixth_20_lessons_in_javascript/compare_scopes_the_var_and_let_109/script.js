function checkScope() {
    "use strict";
    var i = "function scope";
    if (true) {
        i = "Block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope()