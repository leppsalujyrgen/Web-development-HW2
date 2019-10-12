class Person {

    constructor(title, semester) {
        this._title = title;
        this._semester = semester;
        this._grade = "N/A";
    }

    constructor(title, semester, grade) {
        this._title = title;
        this._semester = semester;
        this._grade = grade;
    }


    get title() {
        return this._title;
    }

    get semester() {
        return this._semester;
    }

    get grade() {
        return this._grade;
    }

    set grade(value) {
        this._grade = value;
    }
}