function calculate(){

    var hourlyWage = parseFloat(document.getElementById("hourlyWage").value);
    var weeklyHours = parseFloat(document.getElementById("weeklyHours").value);

    var totalPay = (hourlyWage * weeklyHours) * 52;
    var negotiate;
    document.getElementById("totalPay").innerHTML= totalPay;

    if (totalPay < 20000){
        negotiate = ". The salary is too little.";
        document.getElementById("totalPay").innerHTML = "Your yearly salary is $" + totalPay + negotiate;
    }
    else if(totalPay > 20000 && totalPay < 25000){
        negotiate = ". The salary is almost enough. Lets negotiate.";
        document.getElementById("totalPay").innerHTML = "Your yearly salary is $" + totalPay + negotiate;
    }
    else{
        negotiate = ". This is a great salary for me.";
        document.getElementById("totalPay").innerHTML = "Your yearly salary is $" + totalPay + negotiate;
    }

}

function job1Duties(){

    var tasks = ["Greeting Customers", "Taking Customer Transactions", "Offering Customers Products",
    "Recommend Account Upgrades", "Providing Legendary Customer Service"];
    var jobId = parseInt(document.getElementById("job1Id").value);

    document.getElementById("job1Tasks").innerHTML = "";

    if(jobId > (tasks.length)){
        alert("Error")
        return
    }
    for (i = 0; i <= jobId - 1; i++) {
        if(i == 4){
            document.getElementById("job1Tasks").innerHTML += tasks[i]
            continue
        }
        document.getElementById("job1Tasks").innerHTML += tasks[i] + ", ";
    }

}

function job2Duties(){

    var tasks = ["Taking Orders", "Making Food for Customers", "Providing Great Customer Service",
    "Cleaning Tables", "Restocking Ingredients"];
    var jobId = parseInt(document.getElementById("job2Id").value);

    document.getElementById("job2Tasks").innerHTML = "";

    if(jobId > (tasks.length)){
        alert("Error")
        return;
    }
    for (i = 0; i <= jobId - 1; i++) {
        if(i == 4){
            document.getElementById("job2Tasks").innerHTML += tasks[i];
            continue;
        }
        document.getElementById("job2Tasks").innerHTML += tasks[i] + ", ";
    }

}