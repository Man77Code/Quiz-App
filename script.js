let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "Which is the most widely spoken language in the world?",
    options: ["Spanish", "Mandarin", "English", "German"],
    correct: "Mandarin",
  },
  {
    id: "1",
    question: "Which is the only continent in the world without a desert?",
    options: ["North America", "Asia", "Africa", "Europe"],
    correct: "Europe",
  },
  {
    id: "2",
    question: "Who invented Computer?",
    options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
    correct: "Charles Babbage",
  },
  {
    id: "3",
    question:
      "What do you call a computer on a network that requests files from another computer?",
    options: ["A client", "A host", "A router", "A web server"],
    correct: "A client",
  },
  {
    id: "4",
    question:
      "Hardware devices that are not part of the main computer system and are often added later to the system.",
    options: ["Peripheral", "Clip art", "Highlight", "Execute"],
    correct: "Peripheral",
  },
  {
    id: "5",
    question:
      "The main computer that stores the files that can be sent to computers that are networked together is:",
    options: ["Clip art", "Mother board", "Peripheral", "File server"],
    correct: "File server",
  },
  {
    id: "6",
    question: "How can you catch a computer virus?",
    options: [
      "Sending e-mail messages",
      "Using a laptop during the winter",
      "Opening e-mail attachments",
      "Shopping on-line",
    ],
    correct: "Opening e-mail attachments",
  },
  {
    id: "7",
    question: "Google (www.google.com) is a:",
    options: [
      "Search Engine",
      "Number in Math",
      "Directory of images",
      "Chat service on the web",
    ],
    correct: "Search Engine",
  },
  {
    id: "8",
    question: "Which is not an Internet protocol?",
    options: ["HTTP", "FTP", "STP", "IP"],
    correct: "STP",
  },
  {
    id: "9",
    question: "Which of the following is not a valid domain name?",
    options: [
      "www.yahoo.com",
      "www.yahoo.co.uk",
      "www.com.yahoo",
      "www.yahoo.co.in",
    ],
    correct: "www.com.yahoo",
  },
  {
    id: "10",

    question: "In which year did India gain independence?",
    options: ["1945", "1947", "1950", "1962"],
    correct: "1947",
  },
  {
    id: "11",

    question: "Which river is considered the holiest in Hinduism?",
    options: ["Yamuna", "Ganges", "Brahmaputra", "Godavari"],
    correct: "Ganges",
  },
  {
    id: "12",

    question: "What is the capital city of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    correct: "Delhi",
  },
  {
    id: "13",

    question: "Which Indian festival is known as the Festival of Lights?",
    options: ["Holi", "Diwali", "Navratri", "Eid"],
    correct: "Diwali",
  },
  {
    id: "14",

    question: "Which mountain range separates India from China?",
    options: ["Himalayas", "Vindhya Range", "Western Ghats", "Aravalli Range"],
    correct: "Himalayas",
  },

  {
    id: "15",

    question: "What is the currency of India?",
    options: ["Yen", "Rupee", "Dollar", "Pound"],
    correct: "Rupee",
  },
  {
    id: "16",

    question: "Which Indian city is known as the 'Silicon Valley of India'?",
    options: ["Mumbai", "Hyderabad", "Bangalore", "Chennai"],
    correct: "Bangalore",
  },
  {
    id: "17",

    question: "Who was the first woman Prime Minister of India?",
    options: ["Indira Gandhi", "Sonia Gandhi", "Mayawati", "Mamata Banerjee"],
    correct: "Indira Gandhi",
  },

  {
    id: "18",

    question: "Which Indian state is known as the 'Land of Five Rivers'?",
    options: ["Punjab", "Haryana", "Uttar Pradesh", "Rajasthan"],
    correct: "Punjab",
  },
  {
    id: "19",

    question: "Which Indian cricketer is known as the 'Master Blaster'?",
    options: [
      "Sachin Tendulkar",
      "Virat Kohli",
      "Rahul Dravid",
      "Virender Sehwag",
    ],
    correct: "Sachin Tendulkar",
  },
  {
    id: "20",
    question:
      "Which Indian festival marks the arrival of spring and is celebrated with vibrant colors?",
    options: ["Holi", "Diwali", "Navratri", "Eid"],
    correct: "Holi",
  },
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
