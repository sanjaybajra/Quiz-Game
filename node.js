const questions=[{
    question:"which is largest animal in the world?",
    answers:[
        {
            text:"shark",correct:false
        },
          {
            text:"Blue Whale",correct:true
        },
          {
            text:"Elephant",correct:false
        },
          {
            text:"Giraffe",correct:false
        }
    ]
},{
     question:"which is smallest acontinent in the world?",
    answers:[
        {
            text:"Asia",correct:false
        },
          {
            text:"Australia",correct:true
        },
          {
            text:"Arctic",correct:false
        },
          {
            text:"Africa",correct:false
        }
    ]
},{
     question:"which is largest desert in the world?",
    answers:[
        {
            text:"Kalahari",correct:false
        },
          {
            text:"Gobi",correct:false
        },
          {
            text:"Sahara",correct:false
        },
          {
            text:"Antarctic",correct:true
        }
    ]
},{
     question:"Who is the First Prime Minister of Nepal?",
    answers:[
        {
            text:"Sherbahadur Deuba",correct:false
        },
          {
            text:"Ram Chandra Paudel",correct:false
        },
          {
            text:"Madan krishna",correct:false
        },
          {
            text:"Bishweshwar Prasad Koirala",correct:true
        }
    ]
},{
     question:"which is largest river in the world?",
    answers:[
        {
            text:"Mississippi",correct:false
        },
          {
            text:"Nile",correct:true
        },
          {
            text:"Roe",correct:false
        },{
            text:"Caspian",correct:false
        }
    ]
}
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score =0;
function startQuiz(){
    currentQuestionIndex = 0;
     score =0;
     nextButton.innerHTML="Next";
     showQuestion();
}
function  showQuestion(){

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect");
 
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML= `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handelNextButton(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handelNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();








