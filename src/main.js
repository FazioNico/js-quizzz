import "./style.css";
import { flashcards } from "./flashcards";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Flashcards Quizzz</h1>
    <div class="flashcards-container"></div>
    <button class="start-quizzz">Start Quizzz</button>
  </div>
`;

const startQuizzz = () => {
  const elementHtml = document.querySelector(".flashcards-container");
  elementHtml.innerHTML = `<table>
      <tr>
        <th>Question</th>
        <th>Answer</th>
      </tr>
      ${flashcards
        .map(
          (flashcard) => `
        <tr>
          <td>${flashcard.question}</td>
          <td>${flashcard.answer}</td>
        </tr>
      `,
        )
        .join("")}
    </table>`;
};

document.querySelector(".start-quizzz").addEventListener(
  "click", 
  () => {
    startQuizzz();
    document.querySelector(".start-quizzz").style.display = "none";
  }
);
