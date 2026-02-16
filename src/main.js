import "./style.css";
import { flashcards } from "./flashcards";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Flashcards Quizzz</h1>
    <div class="flashcards-container"></div>
    <button class="start-quizzz">Start Quizzz</button>
    <button class="next-question" style="display: none;">Next Question</button>
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
  // display question and answer in table format
  elementHtml.innerHTML = `<table>
      <tr>
        <th>Question</th>
        <th>Answer</th>
      </tr>
        <tr>
          <td>${qa.question}</td>
          <td>${qa.answer}</td>
        </tr>
    </table>`;
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
