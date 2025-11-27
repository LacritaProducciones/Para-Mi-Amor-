const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionContainer = document.getElementById("questionContainer");
const heartLoader = document.getElementById("heartLoader");
const resultContainer = document.getElementById("resultContainer");
const openLetterBtn = document.getElementById("openLetterBtn");
const letterContainer = document.getElementById("letterContainer");
const readLetterBtn = document.getElementById("readLetterBtn");
const finalMessage = document.getElementById("finalMessage");
const loveText = document.getElementById("loveText");

// Mensaje romántico
const mensaje = `Mi amor, 
Hoy cumplimos 1 mes juntos y no tengo palabras para describir lo feliz que me haces. 
Cada día contigo ha sido un regalo, un capítulo lleno de risas y momentos que guardo en lo más profundo de mi corazón. 

Gracias por tu amor, por tu paciencia, por tu ternura y por ser mi compañera en cada instante. 
Eres mi alegría en los días tristes, mi paz en los momentos difíciles y mi razón para sonreír sin motivo. 

Este primer mes es solo el comienzo de todo lo que quiero vivir contigo. 
Quiero seguir tomándote de la mano y caminar juntos hacia un futuro lleno de sueños cumplidos, besos robados y abrazos infinitos. 

Te amo más de lo que las palabras pueden decir ❤️ 
Y cada día que pasa, mi amor por ti solo crece más. 

Feliz primer mes, mi vida. Por nosotros, por siempre.`;

// Botón "No" que se escapa
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * (questionContainer.offsetWidth - noBtn.offsetWidth));
  const newY = Math.floor(Math.random() * (questionContainer.offsetHeight - noBtn.offsetHeight));

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Botón "Sí"
yesBtn.addEventListener("click", () => {
  questionContainer.classList.add("hidden");
  heartLoader.classList.remove("hidden");

  setTimeout(() => {
    heartLoader.classList.add("hidden");
    resultContainer.classList.remove("hidden");
  }, 2000);
});

// Abrir carta
openLetterBtn.addEventListener("click", () => {
  resultContainer.classList.add("hidden");
  letterContainer.classList.remove("hidden");
});

// Leer mensaje con efecto de escritura
readLetterBtn.addEventListener("click", () => {
  letterContainer.classList.add("hidden");
  finalMessage.classList.remove("hidden");

  let i = 0;
  loveText.innerHTML = "";
  const typing = setInterval(() => {
    loveText.innerHTML += mensaje.charAt(i);
    i++;
    if (i >= mensaje.length) clearInterval(typing);
  }, 50);
});
