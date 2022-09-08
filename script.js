const checkbox= document.getElementById('checkbox');
const quizContainer = document.querySelector(".quiz-container");

checkbox.addEventListener('change',function(){
    document.body.classList.toggle('dark');


    

    


})






const quizData = [
    {
        question :'Who won the first Premier League Title?',
        a : 'Manchester City',
        b : 'Arsenal',
        c : 'Manchester United',
        d :'Chelsea Fc',
        correct : 'c'
    },
    {
        question :'Who is the Only Player to win Champions League with three different clubs?',
        a : 'Toni Kross',
        b : 'Mateo Kovacic',
        c : 'Fernando Redondo',
        d : 'Clarence Seedorf',
        correct : 'd'
    },
    {
        question :'RB Leipzig are otherwise known as?',
        a : 'Red bufallos',
        b : 'Red Bulls',
        c : 'Riding Bullockx',
        d : 'Red Blaquets',
        correct : 'b'
    },
    {
        question :'Ronaldo exclaims which word when celebrating a goal?',
        a : 'suii',
        b : 'sil',
        c : 'sue',
        d : 'seeyou',
        correct : 'b'
    },
    {
        question :'All but one have won World Cup as a player and as a coach?',
        a : 'Misert descartt',
        b : 'Mario Zagallo',
        c : 'Frank Beckenbauer',
        d : 'Didier Deschamps',
        correct : 'a'
    },
    {
        question :'In which World cup did Diego Maradona Score his infamous "Hand of God" goal?',
        a : 'Mexico 1982',
        b : 'Mexico 1986',
        c : 'Mexico 1978',
        d : 'Mexico 1990',
        correct : 'b'
    },
    {
        question :'Which three Players shared the Premier League Golden Boot in 2018-2019?',
        a : 'Aubameyang, Salah, Aguero',
        b : 'Salah, Kane, mane',
        c : 'Vardy, Sterling, Hazard',
        d : 'Mane, salah , Aubameyang',
        correct : 'd'
    },
    {
        question :'Which one of the following teams has not won the European Championship?',
        a : 'Denmark',
        b : 'Belgium',
        c : 'Greece',
        d : 'France',
        correct : 'b'
    },
    {
        question :'Who is the top Bundesliga goalscorer of all time?',
        a : 'Robert Lewandoski',
        b : 'Klaus Fischer',
        c : 'Gerd Muller',
        d : 'Claudio Pizarro',
        correct : 'c'
    },
    {
        question :'Which Country won the First ever World Cup?',
        a : 'Uruguay',
        b : 'France',
        c : 'Argentina',
        d : 'Mexico',
        correct : 'a'
    }
]
const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const aText = document.getElementById('a-text');
const bText = document.getElementById('b-text');
const cText = document.getElementById('c-text');
const dText = document.getElementById('d-text');
const submitBtn = document.getElementById('submit')


let currentQuiz = 0;
let score = 0;

loadQuiz()



function loadQuiz(){
    deselectAnswers()
   
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question
    aText.innerText = currentQuizData.a
    bText.innerText = currentQuizData.b
    cText.innerText = currentQuizData.c
    dText.innerText = currentQuizData.d
 
}

function getSelected(){
    const answersEls = document.querySelectorAll('.answer');

    let answer = undefined;

    answersEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.id;
        }

    }) ;
    return answer; 
    
}

function deselectAnswers(){
    answersEls.forEach((answerEl) =>{
        answerEl.checked = false;

    }) ;
     
}



submitBtn.addEventListener('click', function(){
    const answer = getSelected();

    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++;

        }
    currentQuiz++;


    if(currentQuiz < quizData.length){
        loadQuiz()
    }else{
        quiz.innerHTML =
         `<h2>You Correctly Answered ${score}/${quizData.length} Questions.</h2>
         <button onClick="location.reload()">Reload</button>
         
         `
    }
}
});