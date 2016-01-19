/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
  "name":"Jonathan Sullivan",
  "role": "Tech Developer",
  "contacts":{
    "mobile":"469-644-6083",
    "email":"jonathan.k.sullivan@gmail.com",
    "github":"JonathanKSullivan",
    "twitter":"@JonathanSulli13",
    "location":"Dallas"
  },
  "welcomeMessage": "Technology Developer",
  "skill": ["Web Development",  "Data Science",  "Software Engineering", "Android Development"," iOS Development", "Tech Entrepreneur",
  ],
  "bioPic": "images/fry.jpg",
  "display": function(){
    var name = bio.name;
    var role = bio.role;

    var formattedName = HTMLheaderName.replace("%data%", name);
    var formattedRole = HTMLheaderRole.replace("%data%", role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").append(HTMLblog.replace("%data%", bio.contacts.blog));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));

    if (bio.skill.length > 0){
      $("#header").append(HTMLskillsStart);
      for (i in bio.skill){
        $("#skills").append(HTMLskills.replace("%data%", bio.skill[i]))
      }
    }
    $('#header').append(internationalizeButton)
  }
};

var education = {
  "schools":[
    {
      "name":"University of North Texas",
      "location":"Denton, TX, US",
      "degree":"BS",
      "major":["Math"],
      "minor":["CE"],
      "dates":2013,
      "url":"https://www.unt.edu/"
    },
    {
      "name":"Dallas County Comunity College District",
      "location":"Dallas, TX, US",
      "degree":"AS",
      "major":["Math"],
      "minor": [],
      "dates":2011,
      "url":"https://www.dcccd.edu/Pages/default.aspx"
    }
  ],
  "onlineCourses":[
    {
      "title": "Front-End Web Developer Nanodegree",
      "school":"Udacity",
      "dates": 2016,
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title": "Senior Web Developer Nanodegree",
      "school":"Udacity",
      "dates": 2016,
      "url": "https://www.udacity.com/course/senior-web-developer-nanodegree--nd802"
    },
    {
      "title": "Full Stack Web Developer Nanodegree",
      "school":"Udacity",
      "dates": 2016,
      "url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
    },
    {
      "title": "Data Analyst Nanodegree",
      "school":"Udacity",
      "dates": 2016,
      "url": "https://www.udacity.com/course/data-analyst-nanodegree--nd002"
    },
    {
      "title": "Machine Learning Engineer Nanodegree",
      "school":"Udacity",
      "dates": 2016,
      "url": "https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009"
    },
    {
      "title": "Begining iOS App Development Nanodegree",
      "school":"Udacity",
      "dates": 2016,
      "url": "https://www.udacity.com/course/beginning-ios-app-development-nanodegree--nd006"
    },
    {
      "title": "iOS Developer Nanodegree",
      "school":"Udacity",
      "dates": 2016,
      "url": "https://www.udacity.com/course/ios-developer-nanodegree--nd003"
    },
    {
      "title": "Android Developer Nanodegree",
      "school":"Udacity",
      "dates": 2016,
      "url": "https://www.udacity.com/course/android-developer-nanodegree--nd801"
    },
    {
      "title": "Mobile Game Developer Nanodegree",
      "school":"Udacity",
      "dates": 2016,
      "url": "https://www.udacity.com/course/mobile-game-developer-nanodegree--nd011"
    },
    {
      "title": "Tech Entrepreneur Nanodegree",
      "school":"Udacity",
      "dates": 2016,
      "url": "https://www.udacity.com/course/tech-entrepreneur-nanodegree--nd007"
    }
  ],
  "display": function(){
    for (i in education.schools){
      $('#education').append(HTMLschoolStart)
      $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i].name)+HTMLschoolDegree.replace("%data%", education.schools[i].degree))
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates)+HTMLschoolLocation.replace("%data%", education.schools[i].location))
      if (education.schools[i].major.length > 0){
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].major))
      }
      if (education.schools[i].minor.length > 0){
        $(".education-entry:last").append(HTMLschoolMinor.replace("%data%", education.schools[i].minor))
      }
    }
    $('#education').append(HTMLonlineClasses)
    for (i in education.onlineCourses){
      $('#education').append(HTMLschoolStart)
      $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url))
      $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school)+HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates))
      $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url))
    }
  }
};


var work = {
  "jobs":[
    {
      "employer": "Defakto Group",
      "title": "Front-End Web Developer",
      "dates": "September 2015 - Future",
      "description": "Provides front end development for web applications and other projects. <br/> Involved in Development and creation of HTML based templates for use in websites, web applications, email campaigns and landing pages. <br/> Involved in Development and implementation of additional technologies such as JavaScript andjQuery code to execute functionality within these templates. <br/> Performed Content management tasks involved in the management of web sites and web applications. <br/> Tested, debuged, and built code that works across multiple browsers and digital platforms. <br/> Researched, designed, validated and, developed engaging digital solutions that help clients increase user engagement. <br/> Optimized User Interface for mobile devices and other emerging technologies. <br/> Stayed abreast of industry trends and innovations especially in the area of User Experience.",
      "location": "Dallas, TX, US",
      "url": "http://www.defak.to"
    },
    {
      "employer":"Dallas Independent School District",
      "title":"Elementary Educator",
      "dates":"August 2014 - January 2015",
      "description":"Managed 70 fourth graders and created and implemented lesson plans. <br/> Utilized multimedia including software, video, audio and diverse art forms to teach appropriate level math. <br/> Implemented successful blended learning.  <br/> Contact parents to detail child's outstanding academic achievements as well as to deal with discipline issues.",
      "location": "Dallas, TX, US",
      "url": "http://www.dallasisd.org"
    },
    {
      "employer":"Wonder-Space Tech Camp",
      "title":"Counselor",
      "dates":"June 2014 - July 2014",
      "description":"Taught Java Programming, C++, and minecraft modding to students entering 8th grade.  <br/> Co-managed a classroom of 14 students.  <br/> Picked up and administered lunches to students. <br/> Supervised students during free-time. <br/> Helped to promote physical activity and social interaction among students.",
      "location": "Dallas, TX, US",
      "url": "http://www.wonder-space.com/"
    },
    {
      "employer":"Red Oak School District",
      "title":"Educator",
      "dates":"January 2014 - April 2014",
      "description":"Managed 125 tenth graders and created and implemented lesson plans.  <br/>Utilized multimedia including software, video, audio and diverse art forms to teach appropriate level math.  <br/>Lead class in absence of other teacher.  <br/>Contact parents to detail child's outstanding academic achievements as well as to deal with discipline issues.",
      "location": "Red Oak, TX, US",
      "url": "http://www.redoakisd.org/"
    }
  ],
  "display": function(){
    for (i in work.jobs){
      $('#workExperience').append(HTMLworkStart)
      $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer).replace("#", work.jobs[i].url)+HTMLworkTitle.replace("%data%", work.jobs[i].title))
      $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates)+HTMLworkLocation.replace("%data%", work.jobs[i].location))
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description))
    }
  }
};




var projects = {
  "projects":[
    {
      "title":"Front-End Developer Nanodegree",
      "dates":"2016",
      "description":"The following projects demonstrates a working knowledge of the three foundational languages that power each and every website: HTML, CSS and JavaScript.",
      "images":["http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150"],
      "url": "../frontend-nanodegree-portfolio-master/porfolio_frontend.html"
    },
    {
      "title":"Senior Web Developer Nanodegree",
      "dates":"2016",
      "description":"The following projects will be focused on using some of the newest features available, such as Promises, Service Worker, and device-level access APIs designed to develop Progressive Web Applications. ",
      "images":["http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150"],
      "url": "../frontend-nanodegree-portfolio-master/porfolio_senior.html"
    },
    {
      "title":"Full Stack Web Developer Nanodegree",
      "dates":"2016",
      "description": "<ol style='font-size:14px;'>The following projects demonstrates my ability to: <br/> <li>To Build complex server-side web applications that make use of powerful relational databases to persistently store data.</li><li>To secure and configure Linux-based server to host ​applications.</li><li>To explore the challenges in horizontally scaling an application to support thousands of users with a cloud-based application hosting provider.</li></ol>",
      "images":["http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150"],
      "url": "../frontend-nanodegree-portfolio-master/porfolio_fullstack.html"
    },
    {
      "title":"Data Analyst Nanodegree",
      "dates":"2016",
      "description": "<ol style='font-size:14px;'>The following projects demonstrates my ability to: <br/> <li>Wrangle, extract, transform, and load data from various databases, formats, and data sources </li> <li> Use exploratory data analysis techniques to identify meaningful relationships, patterns, or trends from complex data sets </li> <li> Classify unlabeled data or predict into the future with applied statistics and machine learning algorithms </li> <li> Communicate data analysis and findings through effective data visualizations</li><ol/>",
      "images":["http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150"],
      "url": "../frontend-nanodegree-portfolio-master/porfolio_dataanalyst.html"
    },
    {
      "title":"Machine Learning Engineer Nanodegree",
      "dates":"2016",
      "description": "The following projects show my ability to develop machines and systems to dynamically perform the analyses that data scientists used to perform manually that automatically improve themselves.",
      "images":["http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150"],
      "url": "../frontend-nanodegree-portfolio-master/porfolio_machinelearning.html"
    },
    {
      "title":"Begining iOS App Development Nanodegree",
      "dates":"2016",
      "description": "The following projects show my ability to program in Swift 2.0, Apple’s custom programming language designed specifically for building iOS and OS X apps. ",
      "images":["http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150"],
      "url": "../frontend-nanodegree-portfolio-master/porfolio_beginios.html"
    },
    {
      "title":"iOS  Developer Nanodegree",
      "dates":"2016",
      "description": "The following projects demonstrate my expertise as an iOS Developer.",
      "images":["http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150"],
      "url": "../frontend-nanodegree-portfolio-master/porfolio_ios.html"
    },
    {
      "title":"Android Developer Nanodegree",
      "dates":"2016",
      "description":  "The following projects demonstrate my expertise as an Android Developer.",
      "images":["http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150"],
      "url": "../frontend-nanodegree-portfolio-master/porfolio_android.html"
    },
    {
      "title":"Mobile Game Developer Nanodegree",
      "dates":"2016",
      "description":  "The following projects use LibGDX, a powerful cross platform game development framework,  and Java demonstrate that I have the skills necessary to enter the gaming industry, and to publish your own apps.",
      "images":["http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150"],
      "url": "../frontend-nanodegree-portfolio-master/porfolio_game.html"
    },
    {
      "title":"Tech Entrepreneur Nanodegree",
      "dates":"2016",
      "description":"The following projects show my ability to transform my ideas into market-ready products and to how to build sustainable, revenue-generating businesses around those products.  You will see my ability to: <ol><li>Validate your ideas using Google’s Design Sprint process,</li><li>Evaluate and implement the most effective monetization strategies,</li><li>Apply design methodologies to build an interactive, data-backed prototype,</li><li>Create a marketing plan unique to your value proposition</li><li>Develop a polished story for your business in a pitch deck, landing page, or video </li></ol>",
      "images":["http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150"],
      "url": "../frontend-nanodegree-portfolio-master/porfolio_tech.html"
    },
  ],
  "display": function () {
    for (i in projects.projects){
      $('#projects').append(HTMLprojectStart)
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url) + HTMLprojectDates.replace("%data%", projects.projects[i].dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
      for (j in projects.projects[i].images){
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
      }
    }
  }
};


bio.display();
work.display();
education.display();
projects.display();
$("#mapDiv").append(googleMap);




function locationizer(workobj) {
    var a1=[];
    for (i in workobj.jobs){
      a1.push(workobj.jobs[i].location);
    }
    return a1;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));





var inName = function(name){
  if (!isIName){
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  }
  else{
    name = name.trim().split(" ");
  }
  isIName = !isIName
  return name[0] + " "+name[1]
}
