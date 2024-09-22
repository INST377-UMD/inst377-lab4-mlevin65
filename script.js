// alert function
document.getElementById("alert").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    if (name) {
        alert("Hi " + name + "!");
    }
});

// text valadation function
document.getElementById("textValadationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let textTester = document.getElementById("textTester").value;
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(textTester)) {
        alert("Text contains special characters!");
    } else {
        alert("Text is valid.");
    }
});

// color change function
let isRed = true;
document.getElementById("colorChangeButton").addEventListener("click", function() {
    if (isRed) {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "red";
    }
    isRed = !isRed;
});

// add text button function
document.getElementById("addTextButton").addEventListener("click", function() {
    let heading = document.getElementById("main-heading");
    heading.innerHTML += " Add Text";
});
