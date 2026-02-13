import './style.css'
import { flashcards} from './flashcards';

document.querySelector('#app').innerHTML = `
  <div>

    <h1>Flashcards Quizzz</h1>

    <table>
      <tr>
        <th>Question</th>
        <th>Answer</th>
      </tr>
      ${flashcards.map(flashcard => `
        <tr>
          <td>${flashcard.question}</td>
          <td>${flashcard.answer}</td>
        </tr>
      `).join('')}
    </table> 
  </div>
`

