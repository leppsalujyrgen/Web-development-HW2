class Course {

    constructor(title, semester, grade) {
        this._title = title;
        this._semester = semester;
        this._grade = grade;
    }

    getTitle() {
        return this._title;
    }

    getSemester() {
        return this._semester;
    }

    getGrade() {
        return this._grade;
    }

}