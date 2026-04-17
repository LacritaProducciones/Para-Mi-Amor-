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
const mensaje = `No se que putas decir xd, pero te conozco desde hace mucho tiempo y no se me has cautivado,
siempre hemos estado el uno para el otro en situaciones buenas como malas, y creo que nos conocemos lo suficiente 
y no se que mas decir  estoy pendejo ( me tienes)  te gustaria intentar algo?`;

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
