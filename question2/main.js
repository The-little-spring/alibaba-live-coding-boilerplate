// Data
const response = {
  stepCount: 4,
  stepInfo: [
    {
      stepNumber: 1,
      questions: ["step 1 - question 1", "step 1 - question 2"],
    },
    {
      stepNumber: 2,
      questions: ["step 2 - question 1", "step 2 - question 2"],
    },
    {
      stepNumber: 3,
      questions: ["step 3 - question 1", "step 3 - question 2"],
    },
    {
      stepNumber: 4,
      questions: ["step 4 - question 1", "step 4 - question 2"],
    },
  ],
};

// DOM elements
const stepNumberElement = document.querySelector(".step-number");
const questionsElement = document.querySelector(".questions");
const prevButton = document.querySelector(".prev-page");
const nextButton = document.querySelector(".next-page");

// Variables
let page = 1;

// Pagination
prevButton.addEventListener("click", prevPage);
nextButton.addEventListener("click", nextPage);

function nextPage() {
  if (page < response.stepCount) {
    page++;
    displayPage(page);
  }
}

function prevPage() {
  if (page > 1) {
    page--;
    displayPage(page);
  }
}

function displayPage(page) {
  const { stepNumber, questions } = response.stepInfo[page - 1];

  questionsElement.innerHTML = "";
  for (const question of questions) {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `${question}<hr>`;
    questionsElement.appendChild(questionElement);
  }

  stepNumberElement.textContent = `Step ${stepNumber}`;
}

window.onload = function () {
  displayPage(1);
};
