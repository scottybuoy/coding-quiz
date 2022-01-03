var quizCont = document.querySelector("#quizBody");
var buttonCont = document.querySelector("#buttonCont");

const header1 = document.querySelector("#mainHead");
const button1 = document.querySelector("#b1");
const button2 = document.querySelector("#b2");
const button3 = document.querySelector("#b3");
const button4 = document.querySelector("#b4");






const quizQuestions = [
    {
        question: "Which is not a Javascript data type?",
        answers: {
            a: "a.  Boolean",
            b: "b.  DOM",
            c: "c.  String",
            d: "d.  Number 4",
        },
        correctAnswer: "b"
    },
    {
        question: "What is a variable?",
        answers: {
            a: "a. A cool ass skateboard trick",
            b: "b. A set of code that performs a given task when invoked",
            c: "c. Built-in functions that are properties of an object",
            d: "d. Containers for storing data values",
        },
        correctAnswer: "d"
    },
    {
        question: "Which symbols enclose the code to be executed in a function?",
        answers: {
            a: "a. ( )",
            b: "b. \" \"",
            c: "c. { }",
            d: "d. & &",
        },
        correctAnswer: "c"
    },
    {
        question: "True or False: Booleans store values of either 'true' or 'false'?",
        answers: {
            a: "a. Yep thas right!",
            b: "b. Nah cuz, that ain't it",
            c: "Placeholder 3",
            d: "Placeholder 4",
        },
        correctAnswer: "a"
    },
    {
        question: "Where does the link to the .js file go in the HTML file?",
        answers: {
            a: "a. <link>",
            b: "b. <script> 2",
            c: "c. <title>",
            d: "d. <a>",
        },
        correctAnswer: "b"
    }
]

// LANDING PAGE //
header1.setAttribute("style", "text-align: center;");
button1.setAttribute("style", "margin: 0 auto;")
const desc = document.createElement("p");
desc.setAttribute("id","desc");
quizBody.insertBefore(desc,buttonCont);
// quizBody.appendChild(desc);
desc.textContent = "Each incorrect answer removes 20s from the clock!";
buttonCont.removeChild(button2); 
buttonCont.removeChild(button3);  
buttonCont.removeChild(button4);
header1.textContent = "Javascript Quiz";
button1.textContent = "Start Now!";
button1.addEventListener("click", trans0);
function trans0() {
    header1.setAttribute("style", "text-align: left;");
    buttonCont.appendChild(button2);
    buttonCont.appendChild(button3);
    buttonCont.appendChild(button4);
    button1.setAttribute("style", "margin: left;")
    quizBody.removeChild(desc);
    header1.textContent = quizQuestions[0].question;
    button1.textContent = quizQuestions[0].answers.a;
    button2.textContent = quizQuestions[0].answers.b;
    button3.textContent = quizQuestions[0].answers.c;
    button4.textContent = quizQuestions[0].answers.d;
}



button2.addEventListener("click", trans1);
function trans1() {
    header1.textContent = quizQuestions[1].question;
    button1.textContent = quizQuestions[1].answers.a;
    button2.textContent = quizQuestions[1].answers.b;
    button3.textContent = quizQuestions[1].answers.c;
    button4.textContent = quizQuestions[1].answers.d;

    button2.removeEventListener("click", trans1);
    button4.addEventListener("click", trans2);
}

function trans2() {
    header1.textContent = quizQuestions[2].question;
    button1.textContent = quizQuestions[2].answers.a;
    button2.textContent = quizQuestions[2].answers.b;
    button3.textContent = quizQuestions[2].answers.c;
    button4.textContent = quizQuestions[2].answers.d;

    button4.removeEventListener("click", trans2);
    button3.addEventListener("click", trans3);
};

function trans3() {
    header1.textContent = quizQuestions[3].question;
    button1.textContent = quizQuestions[3].answers.a;
    button2.textContent = quizQuestions[3].answers.b;
    button3.textContent = quizQuestions[3].answers.c;
    button4.textContent = quizQuestions[3].answers.d;

    buttonCont.removeChild(button3);  
    buttonCont.removeChild(button4);  

    button3.removeEventListener("click", trans3);
    button1.addEventListener("click", trans4);
};

function trans4() {
    buttonCont.appendChild(button3);
    buttonCont.appendChild(button4);
    header1.textContent = quizQuestions[4].question;
    button1.textContent = quizQuestions[4].answers.a;
    button2.textContent = quizQuestions[4].answers.b;
    button3.textContent = quizQuestions[4].answers.c;
    button4.textContent = quizQuestions[4].answers.d;

    button1.removeEventListener("click", trans4);
}