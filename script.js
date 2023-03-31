
//this is a box generator that can take multiple arguments
var mainEl = document.querySelector(".main")
var tagtarget = "";
var boxcolor = 'blue';
var textcolor = 'gold';
var theboxwidth = '300px';
var theboxheight = '80px';
var timercount = 30;
function boxcreate(tagtarget, theboxwidth, theboxheight,boxcolor){
    var headerdiv = document.getElementById(tagtarget);
    headerdiv.style.backgroundColor = boxcolor;
    headerdiv.style.color = textcolor;
    headerdiv.style.fontSize = '40px';
    headerdiv.style.height = theboxheight;
    headerdiv.style.width = theboxwidth;  
}
// var headerdiv = document.getElementById('header');
// headerdiv.style.backgroundColor = 'blue';
// headerdiv.style.color = 'white';
// headerdiv.style.fontSize = '20px';
//header area creation
tagtarget = "header";
boxcreate(tagtarget,'80%','80px','blue');

//timer under the header
var timerarea = document.createElement('section');
timerarea.setAttribute = ('id','timer');
timerarea.style.display = ('inline');
timerarea.style.fontSize = '30pt';
timerarea.style.width = theboxwidth;
timerarea.innerHTML= 'countdown: ' + timercount;
timerarea.style.color = 'white';
timerarea.style.backgroundColor = 'orange';
// var para2 = document.createElement('p');
// para2.textContent = timercount;
// questarea.appendChild(para2);
//start button needs it's event listener
mainEl.appendChild(timerarea);
var startBtn = document.createElement('button');
startBtn.setAttribute("id","startBtn");
startBtn.innerHTML ="Start";
startBtn.style.backgroundColor = "green"
startBtn.style.height = "60px";
startBtn.style.margin = "20px";
startBtn.style.width = "140px";
startBtn.style.fontSize = "45px";
mainEl.appendChild(startBtn);
startBtn.addEventListener("click", gamestart);

//this box create created problems in trying to put the buttons in their own section
//boxcreate(tagtarget = 'timer','60px','60px','green');

//the area for the question
var questarea = document.createElement('section');
questarea.setAttribute("id", "quest-section")
var para = document.createElement('p');
var questtext = "this is where a question goes in";
questarea.innerHTML = questtext;
questarea.appendChild(para);
mainEl.appendChild(questarea);
questarea.style.textAlign = 'center';
//questarea.style.display = 'flex';
//questarea.style.alignContent = 'center';
//questarea.style.display = 'flex';
//questarea.style.flexDirection = 'row';
questarea.style.margin = '80px';
questarea.style.width = '100%';




//tagtarget ="quest-section";
boxcreate(tagtarget = "quest-section", theboxwidth = '80%', '100px', 'black');

//var arr = ["John", "Mark", "Jeff", "Harry"];

var refcount = 0;
var questarray = [
    {
        question: "A very useful tool used during development and debugging for printing cntent to the debugger is",
        choices: ["javscript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    },
    {
        question: "Array's in Javascript can be used to store",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "curly brackets"
    },
    {
        question: "The condition in an if/else statement is enclosed with _______",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Commonly Used data types Do Not include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
   
]

var answerarea = document.createElement('section');
answerarea.setAttribute('id', 'answers');
boxcolor = 'green';
textcolor = 'white';

//this is the starting screen
questarea.innerHTML = 'The question will be here.  Ready to start?';

function gamestart(){
    //first we have to populate the questions
    
    startBtn.removeEventListener("click", gamestart, false);
    startBtn.remove();
    for (let i = 0; i < questarray[refcount].choices.length; i++) {
        var btn = document.createElement("button");
        btn.setAttribute("class", "btn");
        btn.style.margin = "10px";
        btn.style.color = textcolor;
        btn.style.backgroundColor = boxcolor;
        btn.style.display = 'flex';
        btn.style.width = '60%';
        btn.style.height = '50px'
        btn.style.justifyContent = 'center';
        btn.style.alignItems = 'center';
        btn.innerHTML = questarray[refcount].choices[i];
        questarea.appendChild(btn);
    }
    
    if (timercount> 0){



        
    }
    function choicesFunc(e) {
        document.querySelector(".main").innerHTML = ""
        refcount++
        displQuest()
        var element = e.target.innerHTML;
        if(element === questarray[refcount].answer) {
            console.log("correct");
        } else {
            console.log("incorrect")
        }
        console.log("ELEMENT: ", element);
    }
    
    questarea.addEventListener("click", choicesFunc);
}

// for (let i = 0; i < questarray[refcount].choices.length; i++) {
//     var btn = document.createElement("button");
//     btn.setAttribute("class", "btn");
//     btn.style.margin = "10px";
//     btn.style.color = textcolor;
//     btn.style.backgroundColor = boxcolor;
//     btn.style.display = 'flex';
//     btn.style.width = '60%';
//     btn.style.height = '50px'
//     btn.style.justifyContent = 'center';
//     btn.style.alignItems = 'center';
//     btn.innerHTML = questarray[refcount].choices[i];
//     questarea.appendChild(btn);
// }



