$(function () {

    let courses = [
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
        console.log("Profile button pressed.");
        $("#courses-container").hide();
        $("#profile-container").show();
    });

    $("#courses-button").click(function () {
        console.log("Courses button pressed.");
        $("#profile-container").hide();
        $("#courses-container").show();
    });
});