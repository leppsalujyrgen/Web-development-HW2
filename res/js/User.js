class User{

    constructor(firstName, lastName, birthday, faculty, gpa) {
        this._gpa = gpa;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthday = birthday;
        this._faculty = faculty;
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

    getGpa() {
        return this._gpa;
    }
}