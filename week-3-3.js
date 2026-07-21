"use strict";
class College {
    collegeName = "SVECW";
    static city = "Bhimavaram";
    show() {
        console.log(this.collegeName);
        console.log(College.city);
    }
}
let c = new College();
c.show();
