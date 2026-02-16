import "./style.css";
import { flashcards } from "./flashcards";

document.querySelector("#app").innerHTML = `
  <div>
    <h1 class="text-3xl font-bold underline text-blue-400 md:text-amber-400 lg:text-red-400">Flashcards Quizzz</h1>
    <div class="flashcards-container"></div>
    <button class="start-quizzz bg-blue-400 rounded text-white p-4">Start Quizzz</button>
    <button class="next-question bg-blue-400 rounded text-white p-4" style="display: none;">Next Question</button>
  </div>
`;

const startQuizzz = () => {
  const elementHtml = document.querySelector(".flashcards-container");
  // get total number of flashcards
  const totalCards = flashcards.length ;
  // generate random index based on total number of flashcards
  const randomIndex = Math.floor(Math.random() * totalCards);
  // get question and answer using random index
  const qa = flashcards[randomIndex];
  // display question and answer in card format
  elementHtml.innerHTML = `
    <div class="bg-blue-400 rounded-xl shadow-lg p-8 max-w-md mx-auto mt-8 hover:shadow-xl transition-shadow">
      <p class="text-xs uppercase tracking-wide text-gray-400 mb-1">Question</p>
      <p class="text-xl font-semibold text-gray-800">${qa.question}</p>
      <hr class="my-4 border-gray-200" />
      <p class="text-xs uppercase tracking-wide text-gray-400 mb-1">Réponse</p>
      <p class="text-lg text-gray-700">${qa.answer}</p>
    </div>`;
};

document.querySelector(".start-quizzz").addEventListener(
  "click", 
  () => {
    startQuizzz();
    document.querySelector(".start-quizzz").style.display = "none";
    document.querySelector(".next-question").style.display = "block";
  }
);

document.querySelector(".next-question").addEventListener(
  'click',
  () => {
    startQuizzz();
  }
);
