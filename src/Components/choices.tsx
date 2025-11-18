import {useNavigate} from "react-router-dom";

function Choices(props : any) {
  // Props contain: 
  //  level: theme, scenario, choices[], correct[], explanation
  //  index : number

  if (!props.level || !props.level.choices) {
    return null;
  }

  const navigate = useNavigate();

  const isCorrect = (totalLevels : number, level : any, idx : number) => {
    if (level == null) {
      return;
    }

    if (level.correct.includes(idx)) {
      props.setScore(prev => {
        const newScore = prev + 1;
        return newScore <= totalLevels ? newScore : prev;
      })
    }

    props.setIndex(props.index + 1);
  }
  
  // Load All Choices
  const options = props.level.choices.map((choice : string, idx : number) => {
    return (
      <button
        onClick={() => isCorrect(props.totalLevels, props.level, idx)}
        key={`level${props.index}choice${idx}`}
      >
        {choice}
      </button>
    )
  })
  return (
    <>
      {options}
    </>
  )
}
export default Choices;