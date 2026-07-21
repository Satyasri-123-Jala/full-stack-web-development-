"use strict";
var Demo;
(function (Demo) {
    function display() {
        console.log("Namespace Example");
    }
    Demo.display = display;
})(Demo || (Demo = {}));
Demo.display();
