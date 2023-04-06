
//this is a box generator that can take multiple arguments
var mainEl = document.querySelector(".main")
var tagtarget = "";
var boxcolor = 'blue';
var textcolor = 'gold';
var theboxwidth = '300px';
var theboxheight = '80px';
var timercount = 30;
var clickTrue = false;
function boxcreate(tagtarget, theboxwidth, theboxheight,boxcolor){
    var headerdiv = document.getElementById(tagtarget);
    headerdiv.style.backgroundColor = boxcolor;
    headerdiv.style.color = textcolor;
    headerdiv.style.fontSize = '40px';
    headerdiv.style.height = theboxheight;
    headerdiv.style.width = theboxwidth;  
}

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



//the area for the question
var questarea = document.createElement('section');
questarea.setAttribute("id", "quest-section")
var para = document.createElement('p');
var questtext = "this is where a question goes in";
questarea.innerHTML = questtext;
questarea.appendChild(para);
mainEl.appendChild(questarea);
questarea.style.textAlign = 'center';

questarea.style.margin = '80px';
questarea.style.width = '100%';





boxcreate(tagtarget = "quest-section", theboxwidth = '80%', '100px', 'black');



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
var i=0; 
var answerarea = document.createElement('section');
answerarea.setAttribute('id', 'answers');
boxcolor = 'green';
textcolor = 'white';

//this is the starting screen
questarea.innerHTML = 'The question will be here.  Ready to start?';
var timerInterval;
function gamestart(){
    //first we have to remove the event listener and the start button
    
    startBtn.removeEventListener("click", gamestart);
    startBtn.remove();
//this is starting the timer
function setTime(){
    
    timerInterval = setInterval(function (){
        timercount--;
        timerarea.innerHTML= 'countdown: ' + timercount;

        if(timercount == 0){
            clearInterval(timerInterval);
            
            questarea.innerHTML = "Game Over";
            
        }
    }

       , 1000);
    


}

//call of the timer function
setTime();

function gamepop(){

//time to setup the iteration test
var questamount = 5; //wanted this the length of the array
var a = 0;
var thebutnCount = questarray[refcount].choices.length;
// looping test
function qgen (){
  
    // document.querySelector(".main").innerHTML = "";  //this is a clear all!!!!
    if (clickTrue === false){
        clickTrue = true;
        console.log("test the iterations " +a +questamount);
        //document.querySelector(".main").innerHTML = "";  //this is a clear all!!!!
        var quest = questarray[a].question;
        questarea.innerHTML = quest;
        
       
        for (var i=0; i < thebutnCount; i++) {
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
            console.log("this is the btn for loop " + i);
            questarea.addEventListener("click", choicesFunc);


        
       }
        
        
        function choicesFunc(e) {
        

            document.querySelector("#quest-section").innerHTML = "";
            
            // displQuest()
            var element = e.target.innerHTML;
            console.log(questarray[refcount].answer);
            if(element == questarray[refcount].answer) {  
                console.log("correct");
                questarea.innerHTML = "Correct!";
                //questarea.removeEventListener("click", choicesFunc);
                //clearTimeout(mytimeOut,35000);
                clickTrue = false;
                var myscoreTimeout = setTimeout(qgen, 2000);
                clearTimeout(myTimeout, 30000);
                refcount++;
                for(var x=0; x <4; x++){
                    btn.remove();
                }
                questarea.removeEventListener("click", choicesFunc);
                a++;
                  if (a==5){
                    clearInterval(timerInterval);
            
                    questarea.innerHTML = "Game Over";
                    timercount = timercount;
                    timerarea.innerHTML = timercount;
}

                
            } else {
                console.log("incorrect");
                questarea.innerHTML = "Sorry, Inorrect!";
                //questarea.removeEventListener("click", choicesFunc);
                var myscoreTimeout = setTimeout(qgen, 2000);
                clearTimeout(myTimeout,30000);

                clickTrue = false;
                refcount++;
                for(x =0; x <4; x++){
                    btn.remove();
                }
                questarea.removeEventListener("click", choicesFunc);
                a++;
                    if (a==5){
                    clearInterval(timerInterval);
            
                    questarea.innerHTML = "Game Over";
                    timercount = (timercount-2);
                    timerarea.innerHTML = timercount;
                    clickTrue = true;
}
               
            }
            //console.log("ELEMENT: ", element);
            
            
        }
    console.log("back to if");

    }
console.log("back to loop a" + a);

    }
   
if (a == 0){
    qgen();
    myTimeout = setTimeout(qgen(), 0000);
    
}
if (a == 1){
    myTimeout = setTimeout(qgen(), 0000);
    console.log("else happened");   
}
if (a==4){
    clearInterval(timerInterval);
            
            questarea.innerHTML = "Game Over";
            timercount = timercount;
}

}
gamepop();  
}
//try settimeout to the eventlistener. you may have to make a function for that.
