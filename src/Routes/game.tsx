/*
* Loads a level one at a time
* Get the levels from JSON
*/
import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom";
import levels from "../assets/levels.json";
import Options from "../Components/choices.tsx";



function Game() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  
  const navigate = useNavigate();

  //Checks if current level is over limit 
  useEffect(() => {
    if (index >= levels.length) {
      navigate("/outcome", { state : { score : score}});
    }
  }, [index])
  
  const level = levels[index];

  return (
    <main>
      <h1>Game</h1>
      <p>{level ? level.scenario : "No level"}</p>
      <section>
        <Options totalLevels={levels.length} level={level} index={index} setIndex ={setIndex} score={score} setScore={setScore}/>
      </section>
    </main>
  )

}

export default Game;