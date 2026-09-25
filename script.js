const questionsHtml = [
  {
    q: "Which element is used for the main heading of a page?",
    answers: ["<div>", "<h1>", "<p>", "<span>"],
    correct: 1,
  },
  {
    q: "Which code correctly connects a label to an input?",
    answers: [
      '<label>Username</label><input type="text">',
      '<label for="username">Username</label><input id="username" type="text">',
      '<label id="username">Username</label><input type="text">',
      '<label name="username">Username</label><input name="username">',
    ],
    correct: 1,
  },
  {
    q: "What is the main purpose of the alt attribute in an image?",
    answers: [
      "To change the image size",
      "To add a tooltip only",
      "To describe the image for accessibility and when the image cannot load",
      "To improve image quality",
    ],
    correct: 2,
  },
  {
    q: `What happens when this form is submitted?

<form>
  <input type="email" required>
  <button type="submit">Submit</button>
</form>`,
    answers: [
      "It submits even if the field is empty",
      "It prevents submission if the email is empty or invalid",
      "It deletes the input value",
      "Nothing happens",
    ],
    correct: 1,
  },
  {
    q: "Which structure is more semantic for a page with navigation and main content?",
    answers: [
      "<div> for everything",
      "<header>, <nav>, and <main>",
      "<section> for everything",
      "All structures are exactly the same",
    ],
    correct: 1,
  },
  {
    q: "Which element should be used when you want to navigate to another page?",
    answers: ["<button>", "<div>", "<a>", "<span>"],
    correct: 2,
  },
  {
    q: "Which element represents a header cell in a table?",
    answers: ["<td>", "<tr>", "<th>", "<thead>"],
    correct: 2,
  },
  {
    q: "What does the disabled attribute do on an input?",
    answers: [
      "It allows the user to edit the input",
      "It makes the input visible but not interactive",
      "It hides the input",
      "It clears the input value",
    ],
    correct: 1,
  },
  {
    q: "Which is the better choice for an accessible clickable button?",
    answers: [
      '<div onclick="save()">Save</div>',
      '<span onclick="save()">Save</span>',
      '<button onclick="save()">Save</button>',
      '<p onclick="save()">Save</p>',
    ],
    correct: 2,
  },
  {
    q: "Which HTML structure is invalid?",
    answers: [
      "<header><h1>My Website</h1></header>",
      "<main><article><h2>Post</h2></article></main>",
      "<nav><a href='/'>Home</a></nav>",
      "<h1><h2>My title</h2></h1>",
    ],
    correct: 3,
  },
];

const questionsCss = [
  {
    q: "How can you center the items horizontally inside a flex container?",
    answers: [
      "align-items: center",
      "justify-content: center",
      "text-align: center",
      "position: center",
    ],
    correct: 1,
  },
  {
    q: "The elements are displayed next to each other. How can you make them appear vertically?",
    answers: [
      "flex-direction: column",
      "flex-direction: row",
      "align-direction: column",
      "display: column",
    ],
    correct: 0,
  },
  {
    q: "What does padding: 20px do to a button?",
    answers: [
      "Adds space outside the button",
      "Adds space between the content and the border",
      "Changes the font size",
      "Adds space between the button and other elements",
    ],
    correct: 1,
  },
  {
    q: "What does margin: 20px do to an element?",
    answers: [
      "Adds space inside the element",
      "Adds space between the content and the border",
      "Adds space outside the element",
      "Changes the width of the element",
    ],
    correct: 2,
  },
  {
    q: "Which position value is best for a button that should stay at the bottom-right of the screen while scrolling?",
    answers: ["static", "relative", "absolute", "fixed"],
    correct: 3,
  },
  {
    q: "A card has width: 500px and is too wide on mobile. Which is a good responsive solution?",
    answers: [
      "width: 100%",
      "width: 100%; max-width: 500px;",
      "height: 100%",
      "font-size: 500px;",
    ],
    correct: 1,
  },
  {
    q: "Which CSS display property is most suitable for creating a layout of cards in rows and columns?",
    answers: [
      "display: block",
      "display: flex",
      "display: grid",
      "position: absolute",
    ],
    correct: 2,
  },
  {
    q: "Which CSS code changes the button's background when the mouse pointer is over it?",
    answers: [
      "button { hover: blue; }",
      "button:hover { background: blue; }",
      "button:click { background: blue; }",
      "button.mouse { background: blue; }",
    ],
    correct: 1,
  },
  {
    q: "A flex container uses the default flex-direction: row, has height: 400px, and align-items: center. What does align-items: center do?",
    answers: [
      "Centers the item horizontally",
      "Centers the item vertically",
      "Centers only the text",
      "Makes the item take the full width",
    ],
    correct: 1,
  },
  {
    q: "You have a flex container and want the cards to appear one below another instead of next to each other. What should you add?",
    answers: [
      "flex-direction: column",
      "justify-content: column",
      "display: column",
      "align-direction: column",
    ],
    correct: 0,
  },
];

const questionsJavaScript = [
  {
    q: `What is the value of x?

let x = 10 + 10;`,
    answers: ["10", "20", "undefined", "Error"],
    correct: 1,
  },
  {
    q: 'What is the result of console.log(5 === "5")?',
    answers: ["true", "false", "undefined", "Error"],
    correct: 1,
  },
  {
    q: 'What is the result of fruits[1] if fruits = ["apple", "banana", "orange"]?',
    answers: ["apple", "banana", "orange", "undefined"],
    correct: 1,
  },
  {
    q: `What is the value of result after using map?

const result = [1, 2, 3].map(n => n * 2);`,
    answers: ["[1, 2, 3]", "[2, 4, 6]", "[3, 4, 5]", "6"],
    correct: 1,
  },
  {
    q: "What does filter(n => n > 2) return for [1, 2, 3, 4, 5]?",
    answers: ["[1, 2]", "[3, 4, 5]", "[2, 3, 4]", "3"],
    correct: 1,
  },
  {
    q: `What is printed by this function?

function double(n) {
  return n * 2;
}

console.log(double(10));`,
    answers: ["10", "20", "undefined", "Error"],
    correct: 1,
  },
  {
    q: "Which code correctly selects an element with id='title'?",
    answers: [
      'document.getElement("title")',
      'document.querySelector("title")',
      'document.getElementById("title")',
      'document.id("title")',
    ],
    correct: 2,
  },
  {
    q: 'What does textContent = "Welcome" do?',
    answers: [
      "Deletes the element",
      "Changes the text inside the element to Welcome",
      "Changes only the CSS",
      "Creates a new element",
    ],
    correct: 1,
  },
  {
    q: `When does this event listener run?

button.addEventListener("click", () => {
  console.log("Hello");
});`,
    answers: [
      "When the page loads",
      "When the button is clicked",
      "When the button is deleted",
      "It creates a new button",
    ],
    correct: 1,
  },
  {
    q: `What is the result of this code?

[1, 2, 3, 4]
  .filter(n => n % 2 === 0)
  .map(n => n * 10);`,
    answers: ["[1, 3]", "[2, 4]", "[20, 40]", "[10, 20, 30, 40]"],
    correct: 2,
  },
];
let current = 0;
let score = 0;
let attempt = 1;
let selectedQuestions = [];

const qEl = document.getElementById("question");
const qNum = document.getElementById("questionNum");
const att = document.getElementById("attempt");
const quizMeta = document.getElementById("quizMeta");
const progressWrap = document.getElementById("progressWrap");
const progressBar = document.getElementById("progressBar");
const progressPercent = document.getElementById("progressPercent");
const aEl = document.getElementById("answers");
const nextBtn = document.getElementById("next");
const toast = document.getElementById("toast");
const again = document.getElementById("again");
const htmlBtn = document.getElementById("htmlBtn");
const cssBtn = document.getElementById("cssBtn");
const jsBtn = document.getElementById("jsBtn");
const categories = document.getElementById("categories");

function choice() {
  htmlBtn.onclick = () => {
    selectedQuestions = questionsHtml;
    categories.style.display = "none";
    quizMeta.style.display = "flex";
    progressWrap.style.display = "block";

    load();
  };
  cssBtn.onclick = () => {
    selectedQuestions = questionsCss;
    categories.style.display = "none";
    quizMeta.style.display = "flex";
    progressWrap.style.display = "block";

    load();
  };
  jsBtn.onclick = () => {
    selectedQuestions = questionsJavaScript;
    categories.style.display = "none";
    quizMeta.style.display = "flex";
    progressWrap.style.display = "block";

    load();
  };
}
choice();

function showToast() {
  toast.className = "toast-notification show";
  setTimeout(() => {
    toast.className = "toast-notification";
  }, 2000);
}

function load() {
  nextBtn.style.display = "none";
  aEl.innerHTML = "";
  const qu = selectedQuestions[current];
  qEl.textContent = qu.q;

  const questionNumber = current + 1;
  const totalQuestions = selectedQuestions.length;

  const progress = Math.round((questionNumber / totalQuestions) * 100);

  qNum.textContent = `Question ${questionNumber} / ${totalQuestions}`;
  att.textContent = `Attempt ${attempt}`;

  progressBar.style.width = `${progress}%`;
  progressPercent.textContent = `${progress}%`;

  qu.answers.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.textContent = ans;
    btn.onclick = () => selectAnswer(btn, i);
    aEl.appendChild(btn);
  });
}

function selectAnswer(button, index) {
  const correctIndex = selectedQuestions[current].correct;
  nextBtn.style.display = "block";

  const buttons = aEl.querySelectorAll("button");

  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i == correctIndex) b.classList.add("correct");

    if (i == index && i !== correctIndex) b.classList.add("wrong");
    if (i != index && i != correctIndex) {
      b.classList.add("disabled-answer");
    }
  });
  if (index == correctIndex) {
    score++;
    showToast();
  }
}

function tryAgain() {
  current = 0;
  score = 0;
  again.style.display = "none";
  categories.style.display = "block";
  qEl.textContent = "";
  qNum.textContent = "";
  att.textContent = "";
  aEl.innerHTML = "";
  nextBtn.style.display = "none";
  progressBar.style.width = "0%";
  progressPercent.textContent = "0%";

  document.querySelector(".quiz-meta").style.display = "flex";
  document.querySelector(".progress-wrap").style.display = "block";
}

nextBtn.onclick = () => {
  current++;
  if (current < selectedQuestions.length) load();
  else {
    qEl.textContent = `you scored ${score} of ${selectedQuestions.length}`;
    aEl.innerHTML = "";
    nextBtn.style.display = "none";
    again.style.display = "block";
    qNum.innerHTML = "";

    document.querySelector(".quiz-meta").style.display = "none";
    document.querySelector(".progress-wrap").style.display = "none";

    attempt++;
  }
};

again.onclick = tryAgain;
