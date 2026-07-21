class College {
    readonly collegeName: string = "SVECW";
    static city: string = "Bhimavaram";

    show() {
        console.log(this.collegeName);
        console.log(College.city);
    }
}

let c = new College();
c.show();