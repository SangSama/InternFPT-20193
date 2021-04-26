const myQuestions = [{
        id: 0,
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: `<xmp><script></xmp>`,
            b: "< scripting >",
            c: "< js >",
            d: "< javascript >"
        },
        correctAnswer: "a"
    },
    {
        id: 1,
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?<br> < p id='demo' >This is a demonstration.< /p >",
        answers: {
            a: "document.getElementByName('p').innerHTML = 'Hello World!';",
            b: "#demo.innerHTML = 'Hello World!';",
            c: "document.getElementById('demo').innerHTML = 'Hello World!';",
            d: "document.getElement('p').innerHTML = 'Hello World!';"
        },
        correctAnswer: "c"
    },
    {
        id: 2,
        question: "Where is the correct place to insert a JavaScript?",
        answers: {
            a: "The < body > section",
            b: "Both the < head > section and the < body > section are correct",
            c: "The < head > section",
            d: "One in two : < body > or < head >"
        },
        correctAnswer: "b"
    },
    {
        id: 3,
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: {
            a: "< javascript name='xxx.js' >",
            b: "< script src='xxx.js' >",
            c: "< script href='xxx.js' >",
            d: "< script name='xxx.js' >"
        },
        correctAnswer: "b"
    },
    {
        id: 4,
        question: "The external JavaScript file must contain the < script > tag.",
        answers: {
            a: "True",
            b: "False",
            c: "optional",
            d: "false, must be < javascript >"
        },
        correctAnswer: "a"
    },
    {
        id: 5,
        question: "How do you write 'Hello World' in an alert box?",
        answers: {
            a: "msgBox('Hello World')",
            b: "alertBox('Hello World')",
            c: "msf('Hello World')",
            d: "alert('Hello World')"
        },
        correctAnswer: "d"
    },
    {
        id: 6,
        question: "How do you create a function in JavaScript?",
        answers: {
            a: "funtion myFunction() {}",
            b: "function:myFunction() {}",
            c: "const myfunction = () => {}",
            d: "function = myFunction()"
        },
        correctAnswer: "c"
    },
    {
        id: 7,
        question: "How do you call a function named 'myFunction'?",
        answers: {
            a: "myFunction()",
            b: "call myFunction()",
            c: "call function myFunction()",
            d: "all"
        },
        correctAnswer: "a"
    },
    {
        id: 8,
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answers: {
            a: "if i<>5",
            b: "if (i<>5)",
            c: "if (i!=5)",
            d: "if i!=5 then"
        },
        correctAnswer: "c"
    },
    {
        id: 9,
        question: "How does a WHILE loop start?",
        answers: {
            a: "while i=1 to 10",
            b: "while ( i<10 ; i++)",
            c: "while ( i<10 )",
            d: "all"
        },
        correctAnswer: "c"
    },
    {
        id: 10,
        question: "How does a FOR loop start?",
        answers: {
            a: "for i = 1 to 5",
            b: "for ( i=0 ; i <= 5 )",
            c: "for ( i <= 5 ; i++ )",
            d: "for ( i = 0 ; i <= 5 ; i++ )"
        },
        correctAnswer: "d"
    },
    {
        id: 11,
        question: "How can you add a comment in a JavaScript?",
        answers: {
            a: "< !-- Javascript -- >",
            b: "// Javascript",
            c: "< cmt >Javascript< /cmt >",
            d: "'Javascript"
        },
        correctAnswer: "b"
    },
    {
        id: 12,
        question: "How to insert a comment that has more than one line?",
        answers: {
            a: "< !-- Javascript -- >",
            b: "// Javascript",
            c: "/* Javascript */",
            d: "< cmt > Javascript < /cmt >"
        },
        correctAnswer: "c"
    },
    {
        id: 13,
        question: "What is the correct way to write a JavaScript array?",
        answers: {
            a: "var numbers = [1, 2, 3, 4, 5]",
            b: "let numbers = (1:'1', 2:'2', 3:'3', 4:'4', 5:'5')",
            c: "numbers = {1 , 2, 3, 4, 5}",
            d: "const numbers = [1='1', 2='2', 3='3', 4='4', 5='5']"
        },
        correctAnswer: "a"
    },
    {
        id: 14,
        question: "How do you round the number 7.25, to the nearest integer?",
        answers: {
            a: "Math.rnd(7.25)",
            b: "Math.round(7.25)",
            c: "Maths.rnd(7.25)",
            d: "round(7.25)"
        },
        correctAnswer: "b"
    },
    {
        id: 15,
        question: "How do you find the number with the highest value of x and y?",
        answers: {
            a: "top(x ,y)",
            b: "ceil(x, y)",
            c: "Math.max(x, y)",
            d: "Math.lead(x, y)"
        },
        correctAnswer: "c"
    },
    {
        id: 16,
        question: "How can you add a comment in a JavaScript?",
        answers: {
            a: "< !-- Javascript -- >",
            b: "// Javascript",
            c: "< cmt >Javascript< /cmt >",
            d: "'Javascript"
        },
        correctAnswer: "b"
    },
    {
        id: 17,
        question: "How to insert a comment that has more than one line?",
        answers: {
            a: "< !-- Javascript -- >",
            b: "// Javascript",
            c: "/* Javascript */",
            d: "< cmt > Javascript < /cmt >"
        },
        correctAnswer: "c"
    },
    {
        id: 18,
        question: "What is the correct way to write a JavaScript array?",
        answers: {
            a: "var numbers = [1, 2, 3, 4, 5]",
            b: "let numbers = (1:'1', 2:'2', 3:'3', 4:'4', 5:'5')",
            c: "numbers = {1 , 2, 3, 4, 5}",
            d: "const numbers = [1='1', 2='2', 3='3', 4='4', 5='5']"
        },
        correctAnswer: "a"
    },
    {
        id: 19,
        question: "How do you round the number 7.25, to the nearest integer?",
        answers: {
            a: "Math.rnd(7.25)",
            b: "Math.round(7.25)",
            c: "Maths.rnd(7.25)",
            d: "round(7.25)"
        },
        correctAnswer: "b"
    }
];

let score  = 0;

const choiceQuestion = [];

let index = 0;

const checkAnswer = () => {

}

const previousQuestion = () => {
    -- index ;
    if (index < 0) {
        return;
    } else {
        if ( index == 0 ) {
            document.getElementById('btn-previous').style.color = '#000000';
        } else {
            document.getElementById('btn-previous').style.color = '#ffffff';
        }
        showData();
        document.getElementById('btn-next').innerHTML = 'Next Question';
        document.getElementById('btn-next').style.backgroundColor = '#d43f04';
    }
}

const nextQuestion = () => {
    ++index;
    let question = document.querySelector('input[name="question"]:checked').value;
    if (index === myQuestions.length) {
        index = myQuestions.length -1;
        let idChoice = index;
        document.getElementById('btn-previous').style.color = '#000000';
        addResult(idChoice, question)
        showScore();
        document.getElementById('btn-previous').setAttribute('disabled','true')
        document.getElementById('btn-next').setAttribute('disabled','true')
    } else {
        let idChoice = index - 1;
        addResult(idChoice, question)
        showData();
        document.getElementById('btn-previous').style.color = '#ffffff';
        if (index == myQuestions.length - 1) {
            document.getElementById('btn-next').innerHTML = 'Submit Quiz';
            document.getElementById('btn-next').style.backgroundColor = '#009999';
        }
    }
}

const addResult = (id, rs) => {
    let data = {
        id : id, 
        rs : rs
    }
    let check = -1
    choiceQuestion.forEach(qs => {
        if(qs.id == data.id){
            qs.rs =data.rs;
            check = 1
        }
    })
    if(check == -1){
        choiceQuestion.push(data)
    }
    
}

const showData = () => {
    document.getElementById('btn-next').style.color = '#ffffff';
    document.getElementById('btn-previous').removeAttribute('disabled')
    document.getElementById('btn-next').removeAttribute('disabled')
    let questionCurrent = '';
    document.getElementById('content').innerHTML = '';
    myQuestions.map((question, i) => {
        if (index === question.id) {
            questionCurrent = `
            <div class="question">
                <b>Question ${i +1} of ${myQuestions.length} :</b><br><p>${question.question}</p>
            </div>
            <form class="answer">
                <input type="radio" name="question" value='a'>
                    <label>${question.answers.a}</label><br>
                <input type="radio" name="question" value='b'>  
                    <label>${question.answers.b}</label><br>
                <input type="radio" name="question" value='c'>
                    <label>${question.answers.c}</label><br>
                <input type="radio" name="question" value='d'>
                    <label>${question.answers.d}</label>
            </form>
            `
        }
    })


    let listQuestion = document.getElementsByName('question');
    document.getElementById('content').innerHTML = questionCurrent;
    console.log(choiceQuestion);
    choiceQuestion.map((item, i)=>{
        if(item.id === index){
            listQuestion.forEach(qs => {
                if(item.rs == qs.value ){
                    qs.setAttribute('checked', 'true')
                }else{
                    qs.removeAttribute('checked')
                }
            })
        }
    })  
}

const showScore = () => {
    let length = myQuestions.length;
    //myQuestions choiceQuestion score
    for(let i =0 ; i< length ; i++ ){
        if(myQuestions[i].correctAnswer == choiceQuestion[i].rs){
            score +=1;
        }
    }
    document.getElementsByClassName('total-score')[0].innerHTML = ` Total score: <span>${score}/${length}</span>`
}