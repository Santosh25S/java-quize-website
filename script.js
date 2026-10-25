const questions = [
  {
    question: "Which language is used to write Java programs?",
    options: ["HTML", "Java", "CSS", "SQL"],
    answer: 1,
    explanation: "Java is the programming language used in this question."
  },
  {
    question: "Which method is the entry point of a basic Java application?",
    options: ["start()", "run()", "main()", "print()"],
    answer: 2,
    explanation: "A standard Java application starts running from its main method."
  },
  {
    question: "Which keyword is commonly used to create an object in Java?",
    options: ["class", "new", "void", "static"],
    answer: 1,
    explanation: "The new keyword creates an object by invoking a constructor."
  }
  
{
    question: "Which keyword is used to inherit a class in Java?",
    options: ["implements", "extends", "inherits", "super"],
    answer: 1,
    explanation: "The extends keyword is used for class inheritance."
},
{
    question: "Which data type stores true or false values?",
    options: ["int", "char", "boolean", "float"],
    answer: 2,
    explanation: "The boolean data type stores true or false."
},
{
    question: "Which symbol ends a Java statement?",
    options: [".", ":", ";", ","],
    answer: 2,
    explanation: "A semicolon ends most Java statements."
},
{
    question: "Which keyword creates a subclass relationship?",
    options: ["static", "extends", "final", "void"],
    answer: 1,
    explanation: "A subclass uses extends to inherit from a class."
},
{
    question: "Which method compares the contents of two Strings?",
    options: ["compare()", "==", "equals()", "match()"],
    answer: 2,
    explanation: "equals() compares String contents."
},
{
    question: "Which loop executes its body at least once?",
    options: ["for", "while", "do-while", "enhanced for"],
    answer: 2,
    explanation: "A do-while loop checks its condition after the body executes."
},
{
    question: "Which keyword prevents a class from being inherited?",
    options: ["static", "private", "final", "protected"],
    answer: 2,
    explanation: "A final class cannot be extended."
},
{
    question: "Which package contains the Scanner class?",
    options: ["java.io", "java.util", "java.lang", "java.net"],
    answer: 1,
    explanation: "Scanner is available in the java.util package."
},
{
    question: "What is the default value of an int instance variable?",
    options: ["1", "null", "0", "undefined"],
    answer: 2,
    explanation: "An int instance variable defaults to 0."
},
{
    question: "Which concept allows one method name to have different parameter lists?",
    options: ["Inheritance", "Method overloading", "Encapsulation", "Abstraction"],
    answer: 1,
    explanation: "Method overloading uses the same method name with different parameter lists."
}

];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;
let checked = false;

const questionNumber = document.getElementById("question-number");
const progress = document.getElementById("progress");
const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const feedback = document.getElementById("feedback");
const scoreText = document.getElementById("score");
const nextButton = document.getElementById("next-button");
const card = document.getElementById("quiz-card");

function renderQuestion() {
  const item = questions[currentQuestion];
  selectedOption = null;
  checked = false;

  questionNumber.textContent = `Question ${currentQuestion + 1}`;
  progress.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  questionText.textContent = item.question;
  optionsContainer.innerHTML = "";
  feedback.textContent = "";
  feedback.className = "feedback";
  scoreText.textContent = `Score: ${score}`;
  nextButton.disabled = true;
  nextButton.textContent = "Check answer";

  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.innerHTML = `<span class="letter">${String.fromCharCode(65 + index)}</span><span></span>`;
    button.querySelector("span:last-child").textContent = option;
    button.addEventListener("click", () => selectOption(index));
    optionsContainer.appendChild(button);
  });
}

function selectOption(index) {
  if (checked) return;
  selectedOption = index;
  [...optionsContainer.children].forEach((button, i) => {
    button.classList.toggle("selected", i === index);
  });
  nextButton.disabled = false;
}

function checkAnswer() {
  if (selectedOption === null) return;

  const item = questions[currentQuestion];
  checked = true;
  const optionButtons = [...optionsContainer.children];

  optionButtons.forEach((button, index) => {
    button.disabled = true;
    if (index === item.answer) button.classList.add("correct");
    if (index === selectedOption && selectedOption !== item.answer) {
      button.classList.add("incorrect");
    }
  });

  if (selectedOption === item.answer) {
    score++;
    feedback.textContent = `Correct! ${item.explanation}`;
    feedback.className = "feedback good";
  } else {
    feedback.textContent = `Not quite. Correct answer: ${item.options[item.answer]}. ${item.explanation}`;
    feedback.className = "feedback bad";
  }

  scoreText.textContent = `Score: ${score}`;
  nextButton.textContent = currentQuestion === questions.length - 1 ? "View result" : "Next question";
}

function showResult() {
  const percent = Math.round((score / questions.length) * 100);
  let message = "Keep practising — you will improve!";
  if (score === questions.length) message = "Excellent work! You got every answer right.";
  else if (score >= 2) message = "Good job! You know the basics.";

  progress.textContent = "Quiz complete";
  card.innerHTML = `
    <div class="result">
      <span class="tag">Quiz complete</span>
      <h2>Your final score</h2>
      <p class="big-score">${score} / ${questions.length}</p>
      <p>${percent}% correct</p>
      <p>${message}</p>
      <button id="restart-button" class="button">Try again</button>
    </div>
  `;
  document.getElementById("restart-button").addEventListener("click", restartQuiz);
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  // Restore the quiz card structure after the result screen.
  card.innerHTML = `
    <div class="question-top">
      <span id="question-number">Question 1</span>
      <span class="tag">Multiple choice</span>
    </div>
    <h2 id="question"></h2>
    <div id="options" class="options"></div>
    <p id="feedback" class="feedback" role="status"></p>
    <div class="actions">
      <span id="score">Score: 0</span>
      <button id="next-button" class="button" disabled>Check answer</button>
    </div>
  `;
  // Reconnect the element references after rebuilding the card.
  window.location.reload();
}

nextButton.addEventListener("click", () => {
  if (!checked) {
    checkAnswer();
    return;
  }
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResult();
  }
});

renderQuestion();
