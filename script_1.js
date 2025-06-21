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
  {
    text: "상대방이 연락이 뜸해졌을 때?",
    a: "기다리며 속으로 고민한다",
    b: "직접 연락해서 이유를 묻는다",
  },
  {
    text: "기념일에 대한 생각은?",
    a: "특별히 챙기진 않지만 기억은 한다",
    b: "기념일은 중요하고 챙기는 편이다",
  },
  {
    text: "연애의 시작은?",
    a: "시간을 들여 알아가며 시작",
    b: "끌리면 빠르게 시작한다",
  },
  {
    text: "데이트에서 더 중요하게 생각하는 것은?",
    a: "분위기와 계획",
    b: "함께 하는 시간 자체",
  },
  {
    text: "상대가 먼저 약속을 어겼을 때?",
    a: "속상하지만 참는다",
    b: "바로 솔직하게 말한다",
  },
  {
    text: "주변 친구들에게 연애 이야기를?",
    a: "거의 안 한다",
    b: "자주 하고 조언도 구한다",
  },
  {
    text: "연인의 일상에 대해?",
    a: "존중하며 간섭하지 않는다",
    b: "궁금하고 자주 공유하길 바란다",
  },
  {
    text: "연애 스타일은?",
    a: "조용하고 안정적인 편",
    b: "열정적이고 자주 표현하는 편",
  },
  {
    text: "연애에서 가장 중요한 것은?",
    a: "신뢰와 배려",
    b: "소통과 감정 공유",
  },
];

let currentQuestion = 0;
let scoreA = 0;
let scoreB = 0;

function startTest() {
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
    result = "💗 당신은 조심스럽고 감정에 충실한 연애 스타일을 선호합니다.";
  } else if (scoreB > scoreA) {
    result = "🔥 당신은 솔직하고 열정적인 연애 스타일을 좋아합니다!";
  } else {
    result = "🌈 당신은 상황에 따라 융통성 있게 연애하는 타입이에요.";
  }

  document.getElementById("result-text").innerText = result;
}
