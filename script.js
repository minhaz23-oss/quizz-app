

const questions = [
    {
        questions: 'What is the capital of France?',
        answers: [
            {text: 'Berlin', correct: false},
            {text: 'Rome', correct: false},
            {text: 'Paris', correct: true},
            {text: 'Madrid', correct: false}
        ]
    },
    {
        questions: 'In which year did World War I begin?',
        answers: [
            {text: '1912', correct: false},
            {text: '1914', correct: true},
            {text: '1916', correct: false},
            {text: '1918', correct: false}
        ]
    },
    {
        questions: 'Who wrote the play "Romeo and Juliet"?',
        answers: [
            {text: 'Charles Dickens', correct: false},
            {text: 'William Shakespeare', correct: true},
            {text: 'Jane Austen', correct: false},
            {text: 'Mark Twain', correct: false}
        ]
    },
    {
        questions: 'What is the largest planet in our solar system?',
        answers: [
            {text: 'Venus', correct: false},
            {text: 'Mars', correct: false},
            {text: 'Jupiter', correct: true},
            {text: 'Saturn', correct: false}
        ]
    },
    {
        questions: 'Who is the author of "To Kill a Mockingbird"?',
        answers: [
            {text: 'J.K. Rowling', correct: false},
            {text: 'Harper Lee', correct: true},
            {text: 'George Orwell', correct: false},
            {text: 'Ernest Hemingway', correct: false}
        ]
    },
    {
        questions: 'What is the square root of 144?',
        answers: [
            {text: '10', correct: false},
            {text: '12', correct: true},
            {text: '14', correct: false},
            {text: '16', correct: false}
        ]
    },
    {
        questions: 'Which element has the chemical symbol "O"?',
        answers: [
            {text: 'Oxygen', correct: true},
            {text: 'Gold', correct: false},
            {text: 'Iron', correct: false},
            {text: 'Uranium', correct: false}
        ]
    },
    {
        questions: 'Who painted the Mona Lisa?',
        answers: [
            {text: 'Vincent van Gogh', correct: false},
            {text: 'Leonardo da Vinci', correct: true},
            {text: 'Pablo Picasso', correct: false},
            {text: 'Michelangelo', correct: false}
        ]
    },
    {
        questions: 'In what year did the Titanic sink?',
        answers: [
            {text: '1908', correct: false},
            {text: '1912', correct: true},
            {text: '1916', correct: false},
            {text: '1920', correct: false}
        ]
    },
    {
        questions: 'What is the capital of Japan?',
        answers: [
            {text: 'Beijing', correct: false},
            {text: 'Seoul', correct: false},
            {text: 'Tokyo', correct: true},
            {text: 'Bangkok', correct: false}
        ]
    },
    {
        questions: 'Who discovered penicillin?',
        answers: [
            {text: 'Alexander Fleming', correct: true},
            {text: 'Marie Curie', correct: false},
            {text: 'Isaac Newton', correct: false},
            {text: 'Albert Einstein', correct: false}
        ]
    },
    {
        questions: 'Which planet is known as the "Red Planet"?',
        answers: [
            {text: 'Mars', correct: true},
            {text: 'Venus', correct: false},
            {text: 'Jupiter', correct: false},
            {text: 'Saturn', correct: false}
        ]
    },
    {
        questions: 'What is the largest ocean on Earth?',
        answers: [
            {text: 'Atlantic Ocean', correct: false},
            {text: 'Indian Ocean', correct: false},
            {text: 'Southern Ocean', correct: false},
            {text: 'Pacific Ocean', correct: true}
        ]
    },
    {
        questions: 'Who wrote "The Great Gatsby"?',
        answers: [
            {text: 'F. Scott Fitzgerald', correct: true},
            {text: 'Ernest Hemingway', correct: false},
            {text: 'Jane Austen', correct: false},
            {text: 'Charles Dickens', correct: false}
        ]
    },
    {
        questions: 'What is the currency of Australia?',
        answers: [
            {text: 'Dollar', correct: true},
            {text: 'Euro', correct: false},
            {text: 'Yen', correct: false},
            {text: 'Pound', correct: false}
        ]
    },
    {
        questions: 'Which country is known as the "Land of the Rising Sun"?',
        answers: [
            {text: 'China', correct: false},
            {text: 'Japan', correct: true},
            {text: 'South Korea', correct: false},
            {text: 'Vietnam', correct: false}
        ]
    },
    {
        questions: 'In what year did the Berlin Wall fall?',
        answers: [
            {text: '1985', correct: false},
            {text: '1989', correct: true},
            {text: '1992', correct: false},
            {text: '1995', correct: false}
        ]
    },
    {
        questions: 'Who is the current President of the United States?',
        answers: [
            {text: 'Joe Biden', correct: true},
            {text: 'Donald Trump', correct: false},
            {text: 'Barack Obama', correct: false},
            {text: 'George W. Bush', correct: false}
        ]
    },
    {
        questions: 'What is the capital of Brazil?',
        answers: [
            {text: 'Buenos Aires', correct: false},
            {text: 'Santiago', correct: false},
            {text: 'Rio de Janeiro', correct: false},
            {text: 'Brasília', correct: true}
        ]
    },
    {
        questions: 'Who wrote "1984"?',
        answers: [
            {text: 'Aldous Huxley', correct: false},
            {text: 'Ray Bradbury', correct: false},
            {text: 'George Orwell', correct: true},
            {text: 'H.G. Wells', correct: false}
        ]
    }
];
let nextBtn = document.querySelector('.next-btn')
let answers = document.querySelector('.answers')
let question = document.querySelector('.questions')
let currentQuetionIndex = 0;
let score = 0;
let x = 0;



nextBtn.addEventListener('click',function(){

   nextBtn.style.display = 'none';


    nextBtn.innerHTML = 'Next'
    question.innerHTML = `${currentQuetionIndex+1}. ${questions[currentQuetionIndex].questions}` ;
   
            answers.innerHTML = ''
           questions[currentQuetionIndex].answers.forEach(function(m){
               
               answers.innerHTML += `<button data-id='${m.correct}' class='btn'>${m.text}</button>`;
  
                })

            
                let btn = document.querySelectorAll('.btn');
                btn.forEach(function(e){
                   e.addEventListener('click',function(s){
                    nextBtn.style.display = 'block';    
                  
                       if(s.target.dataset.id === 'true'){
                         s.target.style.backgroundColor = ' rgb(58, 175, 58)';
                         s.target.style.color = ' white';
                         

                         score++;
                         
                         
                       }else{
                        s.target.style.backgroundColor = 'rgb(240, 45, 45)'
                        s.target.style.color = ' white';
                       }
                       btn.forEach(function(l){
                        if(l.dataset.id === 'true'){
                           l.style.backgroundColor = ' rgb(58, 175, 58)';
                            l.style.color = ' white';
                        }
                         l.disabled = true;
                       })
                      
                       
                       
                   })
                })
        currentQuetionIndex++;
        if(currentQuetionIndex > questions.length - 1){
            currentQuetionIndex = 0;
          
        }
        x++;
        if(x===questions.length + 1){
            answers.innerHTML= `<h2>Your score is ${score} ❣</h2>`;
            question.innerHTML = '';
            nextBtn.innerHTML = 'start again'
            x=0;
            currentQuetionIndex = 0;
            nextBtn.style.display = 'block';
        }
        
    });




