$(function () {

    function updateCourses(user, tableId) {
        let courses = user.getCourses();
        let table = $("#courses");
        let index = $("#courses tr").length;
        courses.forEach(course => {
                table.append(`<tr><td>${index}</td><td>${course.getTitle()}</td><td>${course.getSemester()}</td><td>${course.getGradePoints()}</td></tr>`);
                index += 1;
            }
        )
    }

    let courses = [
        new Course("Agile software development", 1, 82),
        new Course("System modeling", 1, 85),
        new Course("Object-oriented programming", 2, 99),
        new Course("Estonian language Level A2", 2, 65),
        new Course("Software Engineering", 3, 100),
        new Course("Web Development", 3, 100),
        new Course("Operating systems ", 3, 55),
        new Course("Algorithms and Data Structures", 3, 100)
    ];

    let user = new User("Linus", "Torvalds", "28/12/1969", "Computer Science", courses);

    $("#name").text(user.getFirstName() + " " + user.getLastName());
    $("#birthdate").text(user.getBirthday());
    $("#faculty").text(user.getFaculty());
    $("#gpa strong").text(user.getGpa());

    $("#profile-button").click(function () {
        $("#courses-container").hide();
        $("#profile-container").show();
    });

    $("#courses-button").click(function () {
        $("#profile-container").hide();
        $("#courses-container").show();
    });

    $("#add-course-button").click(function () {
        if ($("#add-course").css("display") === "none")
            $("#add-course").css({"display": "inline"});
        else
            $("#add-course").css({"display": "none"});
    });

    updateCourses(user, "courses")

});