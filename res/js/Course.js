class Course {

    constructor(title, semester, gradePoints) {
        this._title = title;
        this._semester = semester;
        this._gradePoints = gradePoints;
    }

    getTitle() {
        return this._title;
    }

    getSemester() {
        return this._semester;
    }

    getGradePoints() {
        return this._gradePoints;
    }

}