let Questions = [
    { 
        question:"Q1. What is Full Form of HTML",
        optA:"Hello TO Movie World",
        optB:"Hello TO Markup Language",
        optC:"HyperText Makeup Language",
        optD:"HyperText Markup Language",
        ans: "optn4" 
    },

    { 
        question:"Q2. What is Full Form of JS",
        optA:"Jungle Speed",
        optB:"JavaSeries",
        optC:"JavaScript",
        optD:"JungleScript",
        ans: "optn3" 
    },

    { 
        question:"Q3. What is Full Form of CSS",
        optA:"Cobra Style Sheet",
        optB:"Cake Cutting Sheet",
        optC:"Cooker Style Sheet",
        optD:"Cascading Style Sheets",
        ans: "optn4" 
    },

    { 
        question:"Q4. What is Full Form of HTTP",
        optA:"Hypertext Transfer Protocol",
        optB:"Human text transfer Protocol",
        optC:"Hyper text total Protocol",
        optD:"Human text tuple protocol",
        ans: "optn1" 
    }
];

const question = document.querySelector('#qstnArea');
const option1 = document.querySelector('#lable1');
const option2 = document.querySelector('#lable2');
const option3 = document.querySelector('#lable3');
const option4 = document.querySelector('#lable4');
const submit = document.querySelector('#submit');

const Answers = document.querySelectorAll('.option');
const hiddenDiv = document.querySelector('#scoreArea');

let counter = 0;
let score = 0;

const questionLoad = () => {
    let questList = Questions[counter];
    question.innerHTML = questList.question;
    option1.innerHTML = questList.optA;
    option2.innerHTML = questList.optB;
    option3.innerHTML = questList.optC;
    option4.innerHTML = questList.optD;

}

questionLoad();

const getCheckAnswer = () => {
    let ans;
    Answers.forEach((curElem)=>{
        if(curElem.checked){
            ans = curElem.id;
          
        }

       
    });
    return ans;

}

submit.addEventListener('click', () => {
    const chechAnswer = getCheckAnswer();
    
    if(chechAnswer === Questions[counter].ans){
        score++;
    }

    counter++;
    if(counter < Questions.length){
        questionLoad();
    }else{
        hiddenDiv.innerHTML = `
        <h3>Your Score is ${score}/${Questions.length}👍</h3>
        <button onclick="location.reload()">Restart</button>
        `

        hiddenDiv.classList.remove('showScoreArea');
    }
});