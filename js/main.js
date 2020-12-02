"use strict";

/* ----- Global variable declaration ----- */
var $window = $(window);
var vmap = $("#vmap");
var currentAmbassador = new Ambassador();
var ambassadorList = [];



/* ----- Begin Ambassadors ----- */
ambassadorList.push(new Ambassador('IN', 'Naik', 'Kunal Atul', 'Operational Excellence, M.B.A. & M.Eng.', 'India', 'Pune', ['English', 'Hindi', 'Marathi', 'German'], 'My experience during my one year at Hof was rewarding in many aspects. The first exposure to the German culture was extremely pleasing and intriguing for me. I got to be acquainted with friends and colleagues from different countries and learnt a lot about the different cultures. The professors and the Welcome Centre were always of great help to the students to ease their way throughout the studies.', ['kunal.naik@hof-university.de'], ['https://www.instagram.com/kunaln_11/', 'https://www.linkedin.com/in/naikkunal11'], 'Photo_Kunal_Atul_Naik.jpeg', 'March 2019', 'March 2021'));
ambassadorList.push(new Ambassador('AL', 'Blloku', 'Marsela', 'Operational Excellence, M.B.A. & M.Eng.', 'Albania', 'Tirana', ['Albanian', 'English', 'Italian', 'German', 'Spanish'], 'Turn ideas into reality and turn reality into innovation. Germany is a progressive country where people know how to have a work life balance. Besides, I see Germany the land of innovation ideas and opportunities. For Example, Hof University has so many training and programs, seminars, consulting and one of the important things according to me the job fairs which are hold at University environment. That were a hug help and big opportunity to get in contact with companies to create links  for further career.', ['marsela.blloku@hof-university.de'], ['n.a.'], 'Blloku__Marsela.jpg', 'March 2018', 'March 2020'));
ambassadorList.push(new Ambassador('JO', 'Almasri', 'Mohammad Muhannad Ramadan', 'Global Management, M.A.', 'Jordan', 'Amman', ['Arabic', 'English', 'German'], 'My experience so far at hof university of applied sciences are wonderful and fruitful. Persuing master in Global Management at hof  is so enjoyable becuase of the great professors that added a huge knowlege to my life path, studying compus with alot of features and a mixture of international students from all over the world attending the program also in other different programs.', ['mohammad.almasri@hof-university.de'], ['n.a.'], '', 'March 2018', 'September 2020'));
ambassadorList.push(new Ambassador('CM', 'Monde Njimamboue', 'Maryam', 'Global Management, M.A.', 'Cameroon', 'Douala', ['English', 'French', 'German'], 'My experience at Hof University of Applied Sciences so far is awesome. You get to learn a lot thanks to great professors. As an international student, you get full support from the university throughout your studies. The housing office assists students in getting accommodation, the career office is also very supportive (CV and motivation letter checks). In addition to that, you have the opportunity to attend a lot of career events which are helpful to get an internship in Germany. Hof is also a nice town. The people here are friendly :) .', ['n.a.'], ['https://www.linkedin.com/in/maryam-monde-njimamboue-311a68b9/', 'https://www.facebook.com/maryam.njimamboue'], 'Monde__Maryam.jpg', 'March 2018', 'September 2020'));
ambassadorList.push(new Ambassador('CO', 'Gomez Romero', 'Paula Geraldine', 'Global Management, M.A.', 'Colombia', 'Bogotá', ['Spanish', 'English', 'German'], 'My experience at Hof University and the Global Management Master\'s degree program has been amazing. I am very happy to have had the opportunity to attend lessons with people from different countries and cultures, which exposed me to the globalized world in which we live. In saying that, I can testify that this Master\'s program offers more than quality lessons, fantastic teachers and excellent facilities. It also offers an international environment that will prepare us for our future careers.', ['n.a.'], ['https://www.facebook.com/paugomezr'], 'Gomez__Paula.jpeg', 'March 2018', 'March 2020'));
ambassadorList.push(new Ambassador('PK', 'Bukhtawar', 'Shahzadi', 'Global Management, M.A.', 'Pakistan', 'Karachi', ['English', 'Urdu', 'Hindi', 'Sindhi', 'Punjabi', 'German'], 'I believe, Hof University is a place where your preparation and opportunity meet. So explore, express and experience the success!', ['n.a.'], ['https://www.facebook.com/shahzadi.bukhtawar'], 'Bukhtawar__Shahzadi.JPG', 'March 2018', 'September 2020')); 
ambassadorList.push(new Ambassador('HN', 'Suazo Elvir', 'Eduardo', 'Operational Excellence, M.B.A. & M.Eng.', 'Honduras', 'Tegucigalpa', ['Spanish', 'English', 'Italian', 'German'], 'The decision of studying in Hochschule Hof has been one of my best life experiences I have ever made. The university offers quite interesting programs in diverse fields and helps develop yourself in your desired orientation with an excellence focus with many practical experience on german companies. Studying and living in Germany has been fun and also enriching for a lifetime experience!', ['esuazoelvir@gmail.com'], ['https://www.facebook.com/eduardo.suazo.9'], 'Suazo__Eduardo_klein.jpg', 'October 2017', 'September 2019'));
ambassadorList.push(new Ambassador('MX', 'Reza', 'Julio', 'General Management, M.B.A.', 'Mexico', 'Mexico City', ['Spanish', 'English', 'German'], 'Hof University gives you the opportunity of studying in a German University with a dynamic and international environment. You will get expose to the German industry and job market. Hof University will give you the knowledge to be able to develop yourself in the changing and international world that we have.', ['n.a.'], ['https://www.facebook.com/julio.rezza', 'https://de.linkedin.com/in/julio-reza-mba-500451109'], 'Reza__Julio.jpg', 'October 2017', 'March 2019'));
ambassadorList.push(new Ambassador('RU', 'Alferova', 'Anna', 'Global Management, M.A.', 'Russia', 'Yuzhno-Sakhalinsk', ['Russian', 'English', 'German', 'Finnish'], 'I have studied a Master program in Global Management at Hof University. I would recommend it to any student who has a desire to learn inner processes of a global company and who is willing to build a career on international arena. I have had a great time studying and living in Hof, thanks to all the great professors and students I\'ve met! All the teachers have a long working experience, which is shared in each lecture and which makes all the classes very interesting and informative. There are many extracurricular activities around the campus such as sports and a racing team association, where I worked in Marketing department. Moreover, studying and communicating with people of various nationalities is something that every person needs to experience and Hof University gives this possibility.', ['alferovanna@gmail.com'], ['https://www.linkedin.com/in/alferovanna/'], 'Alferova__Anna.PNG', 'October 2017', 'March 2020'));
ambassadorList.push(new Ambassador('TW', 'Huang', 'Shu-Xin', 'General Management, M.B.A.', 'Taiwan', 'Taipei', ['Taiwanese','German','English'], 'The beautiful small town took my heart away. Studying at Hof university is the most fulfilling educational experience. Students here have a strong relation with the industries and professors. The university provides us an international platform and prepare us for our future careers in Germany and around the globe. 跟我一起學海飛揚 Let’s meet in Hof!', ['shu-xin.huang@hof-university.de'], ['n.a.'], 'Huang__Shu-Xin.jpg', 'March 2019', 'March 2021'));
ambassadorList.push(new Ambassador('US', 'Iakimenko', 'Ivan', 'Software Engineering for Industrial Applications, M.Eng.', 'United States', 'n.a.', ['English','German'], 'Choosing to go to Hof University to pursue my master’s degree was a difficult but ultimately incredibly rewarding experience. It allowed me to expand my professional and social skills while experiencing the history, culture and natural beauty of Germany. The lectures were engaging and covered relevant topics which were further developed during my internship. After I finished my degree, I was hired immediately in my field of interest and I look forward to continuing living in Germany.', ['n.a.'], ['https://www.facebook.com/ivan.iakimenko'], 'headshot_iakimenko_web.jpg', 'October 2017', 'September 2019'));
ambassadorList.push(new Ambassador('BR', 'Juncal', 'Natalia', 'Global Management, M.A.', 'Brazil', 'Sao Paulo', ['Portuguese','English','German'], 'The Master\'s Degree in Global Management offered everything to boost my international career.  I knew I would be integrated into a University that is a legit melting pot of innovative and creative students, faculty, and staff. The lectures and professors were excellent and memorable. Hof University provided me with a range of new professional experiences in Germany and I am glad I have made this choice.', ['natalia.juncal.ribeiro@hof-university.de'], ['https://www.facebook.com/NataliaJuncal/', 'https://www.linkedin.com/in/nataliajuncal/', 'https://www.instagram.com/natjuncal/'], 'Juncal__Natalia.jpg', 'March 2019', 'March 2021'));
ambassadorList.push(new Ambassador('UG', 'Agaba', 'Mark', 'Global Management, M.A.', 'Uganda', 'Mbarara', ['English','German','Swahili'], 'To be honest, the first time I came across Hof University during my search for where to study my Master\'s course, I thought to myself Hof? Where is this place? And what was even more interesting my German friends didn\'t even know too where Hof was! Fast forward, almost one year into my course now and I can say it has been probably the best decision I could have made, from the orientation program for International students, to the master\'s program and to the wonderful people I have met, saying it was a \'match made in heaven\' is quite a strong statement to make but it does feel more like it!', ['agab300@gmail.com'], ['https://www.linkedin.com/in/markagaba1/', 'https://www.facebook.com/M2arc', 'https://www.instagram.com/m_a_r_c2/'], 'Mark_Agaba.png', 'October 2019', 'March 2021'));
ambassadorList.push(new Ambassador('IR', 'Abdolvand', 'Sanaz', 'Global Management, M.A.', 'Iran', 'Tehran', ['Farsi', 'English','German'], 'The beautiful, modern Hof University made for me a lasting experience of my masters. Knowing friends from 35 different countries around the world, socializing with unique professors and staff in hochschule Hof, pleasant student life and enjoying the beautiful nature of Hof, I could not find these pleasures anywhere else.', ['sanaz.abdolvand@gmail.com'], ['https://www.linkedin.com/in/sanaz-abdolvand-45a61437/', 'https://www.instagram.com/Sunny_abd/'], 'Sanaz_Abdolvand.png', 'October 2019', 'January 2021'));



/* ----- End Ambassadors ----- */





/* ----- On document ready ----- */
$(document).ready(function () {

	// Initialize map
	vmap.vectorMap({
		map: "world_mill",
		backgroundColor: "#a5bfdd",
		borderColor: "#848484",
		borderOpacity: 1,
		borderWidth: 0.5,
		color: "#ffffff",
		enableZoom: true,
		hoverColor: "#eab81a",
		hoverOpacity: null,
		normalizeFunction: "linear",
		scaleColors: ["#b6d6ff", "#005ace"],
		selectedColor: "#c2181d",
		selectedRegions: null,
		showTooltip: true,
		onRegionClick: function (element, code, region) {
			var message = "You clicked '" +
				region +
				"' which has the code: " +
				code;
			console.log(message);
			if (hasAmbassador(code)) {
				showModal(code, region);
			}
		},
		onLabelShow: function (event, label, code) {

			// Show ambassador name and picture
			ambassadorList.forEach(function (element) {
				if (element.countryCode === code) {
					label.text(label.text() + ": " + element.firstName + " " + element.lastName);
					if (element.pictureName === "") {
						$(".jqvmap-label").append("<img src='img/img_avatar.png'>");
					} else {
						$(".jqvmap-label").append("<img src='img/ambassadors/" + element.pictureName + "'>");

					}
					return;
				}
			});
		}
	});

	// Fill any region that has got an ambassador with color
	$(ambassadorList).each(function () {
		var colorSetter = buildColorSetter(this.countryCode, "#274591");
		vmap.vectorMap("set", "colors", colorSetter);
	});
});




/* ----- Helper Functions ----- */

// Build color setter Object required by JQVmap
var buildColorSetter = function (countryCode, color) {
	var colorSetter = {};
	colorSetter[countryCode] = color;
	return colorSetter;
}

// Center element in current viewport
var centerElement = function (el) {
	el.css("position", "absolute");
	el.css("top", Math.max(0, (($window.height() - $(el).outerHeight()) / 2) +
		$window.scrollTop()) + "px");
	el.css("left", Math.max(0, (($window.width() - $(el).outerWidth()) / 2) +
		$window.scrollLeft()) + "px");
	return el;
}

// Adjust map size to window
$window.on("DOMContentLoaded resize", function () {
	vmap.css("width", $window.width() + "px");
	vmap.css("height", $window.height() + "px");
	centerElement(vmap);
});

// Determine if certain country has an ambassador
var hasAmbassador = function (code) {
	var contains = false;
	ambassadorList.forEach(function (element) {
		if (element.countryCode === code) {
			return contains = true;
		}
	});
	return contains;
}


/* ----- Modal ----- */
var modal = $("#myModal");
var modalContent = modal.find(".modal-content")
var btn = $("#myBtn");
var close = $(".close");
var animationTime = 600;

var showModal = function (code, region) {

	// Get current ambassador
	ambassadorList.forEach(function (element) {
		if (element.countryCode === code) {
			currentAmbassador = element;
			return;
		}
	});

	// Fill in data
	$("#modalTitle").text("Hof University Student Ambassador for " + region);
	$("#ambassadorName").text(currentAmbassador.firstName + " " + currentAmbassador.lastName);
	$("#ambassadorTextimonial").text(currentAmbassador.testimonial);
	$("#homeCity").text(currentAmbassador.city);
	$("#studyCourse").text(currentAmbassador.course);
	$("#graduationDate").text(currentAmbassador.graduationDate);
	//$("#email").text(currentAmbassador.email);
	//$("#socialMedia").text(currentAmbassador.socialNetwork);
	$("#socialMedia").wrap("<a target='_blank' href='" + currentAmbassador.socialNetwork +"'></a>");
	$("#studyStart").text(currentAmbassador.studyStart);
	$("#studyEnd").text(currentAmbassador.studyEnd);


	// Configure default fallback picture
	if (currentAmbassador.pictureName === "") {
		$("#picture").attr("src", "img/img_avatar.png");
	} else {
		$("#picture").attr("src", "img/ambassadors/" + currentAmbassador.pictureName);

	}


	// Fill in languages from array
	var languageString = "";
	currentAmbassador.languages.forEach(function (value) {
		languageString += value + ", ";
	});
	languageString = languageString.substring(0, languageString.length - 2);
	$("#languages").text(languageString);
	
	/* new */
	// Fill in email from array
	var emailString = "";
	currentAmbassador.email.forEach(function(value) {
		if (value == "n.a." || value == "n./a.") 
			emailString += value;	
		else
			emailString += "<a href='mailto:"+ value +"'>" + value + "</a><br />";
	});
	$("#email").html(emailString);
  
	// Fill in social media from array
	var socialMediaString = "";
	currentAmbassador.socialNetwork.forEach(function(value) {
		if (value == "n.a.")
			socialMediaString += value; 
		else
			socialMediaString += "<a target='_blank' href='"+ value +"'>" + value + "</a><br />";
	});
	$("#socialMedia").html(socialMediaString);


	// Show Modal
	if (!modal.hasClass("showContent")) {
		modal.toggleClass("showContent");
		modal.animate({
			"opacity": "1",
		}, animationTime);
		modalContent.animate({
			"bottom": "0px"
		}, animationTime);
	}
}


// Close Modal
close.on("click", function () {
	modal.animate({
		"opacity": "0",
	}, animationTime);
	modalContent.animate({
		"bottom": "-600px"
	}, animationTime, function () {
		modal.toggleClass("showContent");
	});
});

$window.on("click", function (event) {
	if (event.target == modal[0]) {
		close.trigger("click");
	}
});