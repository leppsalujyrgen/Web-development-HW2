$(function () {

    function updateCourses(user) {
        $("#courses tr").remove(); // Empty table, since we are updating every course.
        let courses = user.getCourses();
        courses.forEach(course =>  addCourse(course));
    }

    function addCourse(course) {
        let table = $("#courses");
        let index = $("#courses tr").length;

        table.append(`<tr><td>${index}</td><td>${course.getTitle()}</td><td>${course.getSemester()}</td><td>${course.getGradePoints()}</td></tr>`);
        $("#gpa strong").text(user.getGpa());
    }

    function clearNewCourseForm() {
        $("#title").val("");
        $("#semester").val("");
        $("#grade").val("");
    }

    let courses = [
        new Course("Agile software development", 1, 82),
        new Course("System modeling", 1, 85),
        new Course("Object-oriented programming", 2, 99),
        new Course("Estonian language Level A2", 2, 65),
        //new Course("Software Engineering", 3, 100),
        //new Course("Web Development", 3, 100),
        //new Course("Operating systems ", 3, 55),
        //new Course("Algorithms and Data Structures", 3, 100)
    ];

    let user = new User("Linus", "Torvalds", "28/12/1969", "Computer Science", courses);

    $("#name").text(user.getFirstName() + " " + user.getLastName());
    $("#birthdate").text(user.getBirthday());
    $("#faculty").text(user.getFaculty());
    $("#gpa strong").text(user.getGpa());

    $("#profile-button").click(function () {
        $("#courses-container").hide();
        $("#profile-container").show();

        $("#profile-button").toggleClass("active");
        $("#courses-button").toggleClass("active");
    });

    $("#courses-button").click(function () {
        $("#profile-container").hide();
        $("#courses-container").show();

        $("#profile-button").toggleClass("active");
        $("#courses-button").toggleClass("active");
    });

    $("#add-course-button").click(function () {
        if ($("#add-course").css("display") === "none")
            $("#add-course").css({"display": "inline"});
        else
            $("#add-course").css({"display": "none"});
    });

    $("#cancel-course").click(function() {
        $("#add-course").css({"display": "none"});
        clearNewCourseForm();
    })

    updateCourses(user, "courses")

});