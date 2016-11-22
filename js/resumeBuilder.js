var bio = {
    "name": "Stefan Landvogt",
    "role": "Web Developer",
    "contacts": {
        "mobile": "123567",
        "email": "stefland85@gmail.com",
        "github": "10eputzen",
        "location": "Munich"
    },
    "welcomeMessage": "Servus!",
    "skills": ["Pure Awesomeness", "Table Soccer", "Football", "Computer"],
    "bioPic": "images/bio.jpg",
    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formatedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formatedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedWelcomeMessage);
        $("#header").append(formattedBioPic);
        $("#topContacts").append(formatedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formatedGithub);
        $("#topContacts").append(formatedLocation);
        $("#footerContacts").append(formatedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formatedGithub);
        $("#footerContacts").append(formatedLocation);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(entry) {
                var formattedSkill = HTMLskills.replace("%data%", entry);
                $("#header").append(formattedSkill);
            });
        }
    }
};

var education = {
    schools: [{
        "name": "Weidigschule",
        "location": "Butzbach, Hessen, Germany",
        "degree": "Abitur",
        "major": "-",
        "dates": 2005,
    }, {
        "name": "University Duisburg-Essen",
        "location": "Duisburg, NRW, Germany",
        "degree": "BA",
        "major": "Computer Engineering",
        "dates": 2012,
    }],
    onlineCourses: [{
        "title": "Udacity Frontend Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016-11-15 - in progress",
        "url": "http://www.udacity.com",
    }, {
        "title": "PL/SQL Workshop",
        "school": "Integrata",
        "dates": "2014-10",
        "url": "https://www.integrata.de",
    }],
    displaySchool: function() {
        if (education.schools.length > 0) {
            education.schools.forEach(function(entry) {
                $("#education").append(HTMLschoolStart);
                var name = HTMLschoolName.replace("%data%", entry.name);
                var location = HTMLschoolLocation.replace("%data%", entry.location);
                var degree = HTMLschoolDegree.replace("%data%", entry.degree);
                var majors = HTMLschoolMajor.replace("%data%", entry.major);
                var dates = HTMLschoolDates.replace("%data%", entry.dates);
                $(".education-entry:last").append(name);
                $(".education-entry:last").append(degree);
                $(".education-entry:last").append(dates);
                $(".education-entry:last").append(location);
                $(".education-entry:last").append(majors);
            });
        }
    },
    displayOnline: function() {
        if (education.onlineCourses.length > 0) {
            $(".education-entry:last").append(HTMLonlineClasses);
            education.onlineCourses.forEach(function(entry) {
                var title = HTMLonlineTitle.replace("%data%", entry.title);
                var school = HTMLonlineSchool.replace("%data%", entry.school);
                var dates = HTMLonlineDates.replace("%data%", entry.dates);
                var url = HTMLonlineURL.replace("%data%", entry.url);
                $(".education-entry:last").append(title);
                $(".education-entry:last").append(school);
                $(".education-entry:last").append(dates);
                $(".education-entry:last").append(url);
            });
        }
    }
};

var work = {
    jobs: [{
        "employer": "SwissVBS",
        "title": "IT System Administrator",
        "location": "St. Gallen",
        "dates": "2012-2014",
        "description": "IT Support, Media Developement and Technical IT Consulting"
    }, {
        "employer": "Pentland Firth",
        "title": "IT Consultant",
        "location": "Munich",
        "dates": "2014-in progress",
        "description": "IT Consulting"
    }],
    display: function() {
        work.jobs.forEach(function(entry) {
            $("#workExperience").append(HTMLworkStart);
            var employer = HTMLworkEmployer.replace("%data%", entry.employer);
            var title = HTMLworkTitle.replace("%data%", entry.dates);
            var dates = HTMLworkDates.replace("%data%", entry.title);
            var location = HTMLworkLocation.replace("%data%", entry.location);
            var description = HTMLworkDescription.replace("%data%", entry.description);
            var formatedEmployerTitle = employer + title;
            $(".work-entry:last").append(formatedEmployerTitle);
            $(".work-entry:last").append(location);
            $(".work-entry:last").append(dates);
            $(".work-entry:last").append(description);
        });
    }
};

var projects = {
    projects: [{
        "title": "KickCam",
        "dates": "2015",
        "description": "Building a Replay Functionality for the Table Football.",
        "images": ["images/kickcam.PNG"]
    }, {
        "title": "Android controlled electrical socket",
        "dates": "2014",
        "description": "Arduino based eletrical socket that can be controlled via Smartphone.",
        "images": ["images/arduino.jpg", "images/remote.jpg"]
    }],
    display: function() {
        if (projects.projects.length > 0) {
            projects.projects.forEach(function(entry) {
                $("#projects").append(HTMLprojectStart);
                var title = HTMLprojectTitle.replace("%data%", entry.title);
                var dates = HTMLprojectDates.replace("%data%", entry.dates);
                var description = HTMLprojectDescription.replace("%data%", entry.description);
                $(".project-entry:last").append(title);
                $(".project-entry:last").append(dates);
                $(".project-entry:last").append(description);
                if (entry.images.length > 0) {
                    entry.images.forEach(function(ímage) {
                        var link = HTMLprojectImage.replace("%data%", ímage);
                        $(".project-entry:last").append(link);
                    });
                }
            });
        }
    }
};


bio.display();
work.display();
projects.display();
education.displaySchool();
education.displayOnline();

$("#mapDiv").append(googleMap);
