class User{

    constructor(firstName, lastName, birthday, faculty, courses) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthday = birthday;
        this._faculty = faculty;
        this._courses = courses;
        this._gpa = this.calculateGPA();
    }

    getFirstName() {
        return this._firstName
    }


    getLastName() {
        return this._lastName;
    }

    getBirthday() {
        return this._birthday;
    }

    getFaculty() {
        return this._faculty;
    }

    getCourses() {
        return this._courses;
    }

    getGpa() {
        return this.calculateGPA();
    }

    calculateGPA() {
        var courses = this._courses;

        if(!(courses || courses.length === 0))
            return 0.0;

        var pointsSum = 0.0;
        for(let i = 0; i < courses.length; i++) {
            let gradePoints = courses[i].getGradePoints();
            if(gradePoints > 90)
                pointsSum += 5;
            else if(gradePoints > 80)
                pointsSum += 3;
            else if(gradePoints > 70)
                pointsSum += 2;
            else if(gradePoints > 60)
                pointsSum += 1;
            else if(gradePoints > 50)
                pointsSum += 0.5;
        }

        return Math.round(pointsSum / courses.length * 100) / 100;
    }

    addCourse(title, semester, gradePoints) {
        if (title.length > 0 && semester != null && gradePoints >= 0 && gradePoints <= 100) {
            this._courses.push(new Course(title, semester, gradePoints))
        }
    }
}