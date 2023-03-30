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
tagtarget = "header";
boxcreate(tagtarget,'80%','80px','blue');

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

//boxcreate(tagtarget = 'timer','60px','60px','green');


var questarea = document.createElement('section');
questarea.setAttribute("id", "quest-section")
var para = document.createElement('p');
var questtext = "this is where a questions goes in";
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
        question: "Q1 this is a placeholder?",
        choices: ["John", "Mark", "Jeff", "Harry"],
        answer: "Jeff"
    },
    {
        question: "Q2 this is a placeholder?",
        choices: ["John", "Mark", "Jeff", "Harry"],
        answer: "Mark"
    },
    {
        question: "Q2 this is a placeholder?",
        choices: ["John", "Mark", "Jeff", "Harry"],
        answer: "Mark"
    },
    {
        question: "Q2 this is a placeholder?",
        choices: ["John", "Mark", "Jeff", "Harry"],
        answer: "Mark"
    },
    {
        question: "Q2 this is a placeholder?",
        choices: ["John", "Mark", "Jeff", "Harry"],
        answer: "Mark"
    },
]

var answerarea = document.createElement('section');
answerarea.setAttribute('id', 'answers');
boxcolor = 'green';
textcolor = 'white';

//this is the starting screen
questarea.innerHTML = 'The question will be here.  Ready to start?';


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

