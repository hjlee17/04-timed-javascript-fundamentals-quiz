var quizTitle = document.querySelector("#quiz-title-page");
quizTitle.setAttribute("style", "font-size: 4vh; font-weight: bold; margin-bottom: 2vh;");

var startButton = document.querySelector("#start");
startButton.setAttribute("style", "padding: 5px; margin-top: 2vh;");






// create question container for actual query
var questionContainer = document.createElement("div");
questionContainer.textContent = "who is the second oldest member of BTS?";
questionContainer.setAttribute("style", "font-size: 2.7vh; margin: 0 7.5%;");

// append question container to the question-card
var questionCard = document.querySelector(".question-card");
questionCard.appendChild(questionContainer);

// create answer choices container
var choicesContainer = document.createElement("div");

// creates ordered list element for answer choices
var questionTest = document.createElement("ol");
var choices = ["min yoongi", "agust d", "suga", "all of the above"];
// [3] is the correct choice
questionTest.setAttribute("style", "font-size: 2vh; margin-left: 5%;");

// append answers to ordered list element 
for (var i = 0; i < choices.length; i++) {
    var choice = document.createElement("li");
    choice.setAttribute("style", "list-style-type: upper-alpha; font-size: 2vh; margin-left: 5%;"); // list style type
    choice.textContent = choices[i];
    questionTest.appendChild(choice);
}

choicesContainer.appendChild(questionTest); // append ordered list element of answer choices to choices container
questionCard.appendChild(choicesContainer); // append choices container to the question-card


// question <div> element styling to center its content
questionContainer.setAttribute("style", "display: flex; flex-direction: column;");
questionContainer.setAttribute("style", "justify-content: center; align-items: center;");
questionContainer.setAttribute("style", "width: 100%; height: 100%;");




// test function "yoongi" logs "min yoongi, suga, agustd" to console
function yoongi() {
    var yoongi = ("min yoongi, suga, agustd")
    console.log (yoongi)
}  

// test button calls "yoongi" function
var generateBtn = document.querySelector("#start");
generateBtn.addEventListener("click", yoongi);


