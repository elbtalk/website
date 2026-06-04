let currentQuestion = 0;
const answers = new Array(QUESTIONS.length).fill(null);

const introCard = document.getElementById('introCard');
const quizCard = document.getElementById('quizCard');
const resultCard = document.getElementById('resultCard');
const startBtn = document.getElementById('startBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');

startBtn.addEventListener('click', () => {
  introCard.classList.add('hidden');
  quizCard.classList.remove('hidden');
  renderQuestion();
});

prevBtn.addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
});

nextBtn.addEventListener('click', () => {
  if (answers[currentQuestion] === null) {
    alert('Por favor, elegí una opción antes de continuar.');
    return;
  }
  if (currentQuestion < QUESTIONS.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResult();
  }
});

restartBtn.addEventListener('click', () => {
  currentQuestion = 0;
  answers.fill(null);
  resultCard.classList.add('hidden');
  introCard.classList.remove('hidden');
});

function renderQuestion() {
  const question = QUESTIONS[currentQuestion];
  const progress = Math.round(((currentQuestion + 1) / QUESTIONS.length) * 100);

  document.getElementById('questionCounter').textContent = `Pregunta ${currentQuestion + 1} de ${QUESTIONS.length}`;
  document.getElementById('progressPercent').textContent = `${progress}%`;
  document.getElementById('progressFill').style.width = `${progress}%`;
  document.getElementById('questionText').textContent = question.q;

  const optionsBox = document.getElementById('optionsBox');
  optionsBox.innerHTML = '';

  question.options.forEach((option, index) => {
    const label = document.createElement('label');
    label.className = 'option-item';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'answer';
    input.value = index;
    input.checked = answers[currentQuestion] === index;

    input.addEventListener('change', () => {
      answers[currentQuestion] = index;
    });

    const span = document.createElement('span');
    span.textContent = option;

    label.appendChild(input);
    label.appendChild(span);
    optionsBox.appendChild(label);
  });

  prevBtn.disabled = currentQuestion === 0;
  nextBtn.textContent = currentQuestion === QUESTIONS.length - 1 ? 'Ver resultado' : 'Siguiente';
}

function showResult() {
  const score = answers.reduce((total, selected, index) => {
    return total + (selected === QUESTIONS[index].answer ? 1 : 0);
  }, 0);

  const result = getLevel(score);

  quizCard.classList.add('hidden');
  resultCard.classList.remove('hidden');

  document.getElementById('levelTitle').textContent = result.title;
  document.getElementById('scoreText').textContent = `Puntaje: ${score}/${QUESTIONS.length}`;
  document.getElementById('levelDescription').textContent = result.description;
  document.getElementById('courseRecommendation').textContent = result.recommendation;

  const data = {
    name: document.getElementById('studentName').value || 'Sin nombre',
    email: document.getElementById('studentEmail').value || 'Sin email',
    score,
    level: result.title,
    date: new Date().toISOString()
  };

  localStorage.setItem('elbtalk_last_test_result', JSON.stringify(data));
}

function getLevel(score) {
  if (score <= 15) {
    return {
      title: 'A1 · Inicial',
      description: 'Podés comprender y usar expresiones básicas en situaciones simples. Necesitás consolidar vocabulario cotidiano, presente simple y preguntas básicas.',
      recommendation: 'Recomendamos clases particulares o un plan inicial personalizado antes de sumarte a espacios de conversación más abiertos.'
    };
  }
  if (score <= 25) {
    return {
      title: 'A2 · Elemental',
      description: 'Podés comunicarte en situaciones cotidianas, aunque todavía necesitás desarrollar fluidez, precisión gramatical y vocabulario.',
      recommendation: 'Recomendamos clases particulares, Grammar Boost y práctica guiada de conversación.'
    };
  }
  if (score <= 35) {
    return {
      title: 'B1 · Intermedio',
      description: 'Podés expresar opiniones, contar experiencias y desenvolverte en temas conocidos, aunque con algunos errores de estructura y vocabulario.',
      recommendation: 'Recomendamos Conversation Club, Grammar Boost y clases de speaking para ganar confianza.'
    };
  }
  if (score <= 45) {
    return {
      title: 'B2 · Intermedio alto',
      description: 'Tenés una base sólida para comunicarte con naturalidad en contextos personales y profesionales. Podés trabajar en precisión, vocabulario y fluidez.',
      recommendation: 'Recomendamos Business English, Conversation Club, IELTS Speaking o coaching lingüístico personalizado.'
    };
  }
  return {
    title: 'C1 · Avanzado',
    description: 'Tenés un nivel alto de comprensión y uso del inglés. Podés trabajar en matices, argumentación, precisión y comunicación profesional avanzada.',
    recommendation: 'Recomendamos Business English avanzado, IELTS, presentaciones profesionales o coaching para objetivos específicos.'
  };
}
