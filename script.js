function grade() {
    // Updated IDs to match new HTML
    let x = parseFloat(document.getElementById("hindi").value);
    let y = parseFloat(document.getElementById("math").value);
    let z = parseFloat(document.getElementById("science").value);
    let a = parseFloat(document.getElementById("english").value);
    let b = parseFloat(document.getElementById("sst").value);
    let c = parseFloat(document.getElementById("computer").value);

    // Validate inputs
    if (isNaN(x) || isNaN(y) || isNaN(z) || isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Please fill in all subject marks correctly.");
        return;
    }

    let sum = x + y + z + a + b + c;
    document.getElementById("totalmarks").innerText = sum;

    let percentage = (sum / 600) * 100;
    document.getElementById("percentage").innerText = percentage.toFixed(2) + "%";

    if (percentage >= 90 && percentage <= 100) {
        document.getElementById("grade").innerText = "A+ Grade";
    } else if (percentage >= 80 && percentage < 90) {
        document.getElementById("grade").innerText = "A Grade";
    } else if (percentage >= 70 && percentage < 80) {
        document.getElementById("grade").innerText = "B+ Grade";
    } else if (percentage >= 60 && percentage < 70) {
        document.getElementById("grade").innerText = "B Grade";
    } else if (percentage >= 50 && percentage < 60) {
        document.getElementById("grade").innerText = "C Grade";
    } else {
        document.getElementById("grade").innerText = "FAIL";
    }
}

// Clears result display when form is reset
function resetResults() {
    document.getElementById("totalmarks").innerText = "";
    document.getElementById("percentage").innerText = "";
    document.getElementById("grade").innerText = "";
}

function planStudy() {
    let topic = document.getElementById("study-topic").value.trim();
    let hours = parseFloat(document.getElementById("study-time").value);
    let resultDiv = document.getElementById("planner-result");

    if (topic === "" || isNaN(hours) || hours <= 0) {
        resultDiv.innerHTML = "<h3>Please enter a valid study topic and duration.</h3>";
        return;
    }

    // Suggest sessions: One session per hour (if more than one hour)
    let sessions = Math.floor(hours);
    let breakMessage = sessions > 1 
        ? "Remember to take a 5-10 minute break after every hour of study."
        : "Stay focused and make the most of your time!";
    
    resultDiv.innerHTML = `<h3>Study Plan for ${topic}</h3>
    <p>You have planned to study for ${hours} hour${hours !== 1 ? "s" : ""}.</p>
    <p>Break it down into ${sessions} session${sessions !== 1 ? "s" : ""} for better focus.</p>
    <p>${breakMessage}</p>
    <p>Good luck with your studies!</p>`;
}
