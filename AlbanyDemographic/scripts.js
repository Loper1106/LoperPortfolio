function DarkMode(){

    // Sets background and container divs to separate variables for adjustment
    var background = document.getElementsByTagName("BODY")[0];
    var container = document.getElementById("container");

    // Checks if background color is white, then sets to black
    if(background.style.backgroundColor == "white"){
        background.style.backgroundColor = "#181818";
    }
    // Will reset background color to white if already black.
    else{
        background.style.backgroundColor = "white";
    }

}

function generate(){

    var majors = ["Business and Accounting",
    "Biology",
    "Chemistry",
    "Earth & Atmospheric Science",
    "Physics",
    "Psychology",
    "Psychology",
    "Political Science",
    "English, Communication, and Journalism",
    "Criminal Justice",
    "Computer Science and Information Science",
    "History",
    "Mathematics"];
    var numMajors = parseInt(document.getElementById("numMajors").value - 1)
    var list = "";

    if(numMajors > majors.length - 1){
        alert("Error! numMajors too high");
        return
    }

    document.getElementById("listMajors").innerHTML = "";

    for(i = 0; i <= numMajors; i++){
       var list = list + "<li>" + majors[i] + "</li>" ;
       document.getElementById("listMajors").innerHTML = list  ;
    }

}

function calculate(){

    // Variable initialization
    var gpa = parseFloat(document.getElementById("gpa").value);
    var satScore = parseInt(document.getElementById("satScore").value);

    // GPA Calculations
    if (gpa < 3.4){
        gpaResult = "Your GPA is too low.";
    }
    else if(gpa >= 3.4 && gpa <=3.8){
        gpaResult = "Your GPA is good.";
    }
    else if(gpa > 3.8){
        gpaResult = "Your GPA is too high.";
    }
    // SAT Scores Calculations
    if(satScore < 1130){
        satResult = "Your SAT is too low.";
    }
    else if(satScore >= 1130 && satScore <= 1300){
        satResult = "Your SAT is good.";
    }
    else if(satScore > 1300){
        satResult = "Your SAT is too high.";
    }

    // Changes admission result based on your scores
    if(gpaResult == "Your GPA is good." && satResult == "Your SAT is good."){
        document.getElementById("admissionResult").innerHTML = "Your scores are great! <a href='mailto:ugadmissions@albany.edu'>Apply HERE!</a>"
    }
    else{
        document.getElementById("admissionResult").innerHTML = gpaResult + " " + satResult;
    }

}