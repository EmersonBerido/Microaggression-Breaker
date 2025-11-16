/*
* Loads a level one at a time
* Get the levels from JSON
*/
import {useState} from "react"
import {useNavigate} from "react-router-dom";
import levels from "../assets/levels.json"



function Game() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  
  const navigate = useNavigate();

  const level = levels[index];
  const correct = (idx : number) => {
    // If answer is correct
    if (level.correct.includes(idx)) {
      setScore(prev => prev + 1);
      console.log("Correct answer selected");
    } else {
      console.log("Incorrect answer selected");
    }

    // Update Health & Points

    // Load next question
    if (index + 1 >= levels.length) {
      console.log("No more levels");
      navigate("/outcome", { state : { score : score}});
    }
    else {
      setIndex(prev => prev + 1);

    }
  }

  const choices = level.choices.map((choice, idx) => {
    return (
      <button
        onClick={() => correct(idx)}
        key={`level${index}choice${idx}`}
      >
        {choice}
      </button>
    )
  })
  console.log(level);

  return (
    <main>
      <h1>Game</h1>
      <p>{level.scenario}</p>
      <section>
        {choices}
      </section>
    </main>
  )

}

export default Game;