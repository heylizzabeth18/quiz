const quizData = [
    {
        question: "1. Which southern Italian city is usually credited as the birthplace of the pizza?",
        a: 'Vatican',
        b: 'Rome',
        c: 'Naples',
        d: 'Beijing',
        correct: 'c'
    },{
        question: "2. Who is the first African-American disney princess?",
        a: 'Anna',
        b: 'Ariel',
        c: 'Merida',
        d: 'Tiana',
        correct: 'd'
    },{
        question: "3. Which planet has the most moons?",
        a: 'Mercury',
        b: 'Saturn',
        c: 'Earth',
        d: 'Jupiter',
        correct: 'b'
    },{
        question: "4. With over 222 million units sold, what is Apple's highest-selling iPhone model?",
        a: 'iPhone 6 Plus',
        b: 'iPhone XR',
        c: 'iPhone 1',
        d: 'iPhone 12',
        correct: 'a'
    },{
        question: "5. Name the actor who plays the role of Wednesday Addams in Wednesday?",
        a: 'Sienna Augudong',
        b: 'Jenna Ortega',
        c: 'Lizzy Greene',
        d: 'Riele Downs',
        correct: 'b'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');

const a_text= document.getElementById('a_text');
const b_text= document.getElementById('b_text');
const c_text= document.getElementById('c_text');
const d_text= document.getElementById('d_text');

const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score =0;


loadQuiz();
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
             answer = answerEl.id;
        }
    });
    return answer;
} 
function deselectAnswers () {
    answerEls.forEach((answerEl) => {
        answerEl.checked= false;
             
        
    });
}

submitBtn.addEventListener("click", () => {
    //check to see the answer
    const answer = getSelected();

    console.log(answer);

    if (answer) {  
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
      currentQuiz++;
     if (currentQuiz< quizData.length){
     loadQuiz();
     } else {
     quiz.innerHTML = '<h2>You answered </h2>' +score+ '<h2>out of 5 questions correctly</h2> <button onclick="location.reload()">Reload</button>'
     }
    }
})
