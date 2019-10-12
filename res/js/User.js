class User{

    constructor(firstName, lastName, birthday, faculty) {
        this.gpa = 0;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.faculty = faculty;
    }


    get firstName() {
        return this.firstName;
    }

    get lastName() {
        return this.lastName;
    }

    get birthday() {
        return this.birthday;
    }

    get faculty() {
        return this.faculty;
    }

    set faculty(value) {
        this.faculty = value;
    }

    get gpa() {
        return this.gpa;
    }

    set gpa(value) {
        this.gpa = value;
    }
}