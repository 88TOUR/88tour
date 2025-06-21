const questions = [
  {
    text: "연애를 시작할 때 당신의 태도는?",
    a: "감정을 숨기고 천천히 접근한다",
    b: "직접적으로 마음을 표현한다",
  },
  {
    text: "데이트할 때 더 선호하는 것은?",
    a: "계획된 깔끔한 데이트",
    b: "즉흥적인 데이트",
  },
  {
    text: "연인과의 갈등이 생겼을 때?",
    a: "혼자 정리하고 나중에 말한다",
    b: "바로 이야기로 풀어야 한다",
  },
  // ... 9개 더 추가하세요 (총 12개)
];

let currentQuestion = 0;
let scoreA = 0;
let scoreB = 0;

function startTest() {
  const name = document.getElementById("username").value;
  if (!name.trim()) {
    alert("이름을 입력해주세요.");
    return;
  }
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question-number").innerText = `${currentQuestion + 1} / ${questions.length}`;
  document.getElementById("question-text").innerText = q.text;
  document.getElementById("btn-a").innerText = q.a;
  document.getElementById("btn-b").innerText = q.b;
}

function selectAnswer(choice) {
  if (choice === "A") scoreA++;
  else scoreB++;

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "block";

  let result = "";

  if (scoreA > scoreB) {
    result = "당신은 조심스럽고 감정에 충실한 연애 스타일을 선호합니다.";
  } else if (scoreB > scoreA) {
    result = "당신은 솔직하고 열정적인 연애 스타일을 좋아합니다!";
  } else {
    result = "당신은 상황에 따라 융통성 있게 연애하는 타입이에요.";
  }

  document.getElementById("result-text").innerText = result;
}
