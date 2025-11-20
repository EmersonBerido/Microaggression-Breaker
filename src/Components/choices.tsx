import { useState } from "react";

function Choices(props : any) {
  // Props contain: 
  //  level: theme, scenario, choices[], correct[], explanation
  //  index : number

  const [selected, setSelected] = useState<number | null>(null);

  if (!props.level || !props.level.choices) {
    return null;
  }

  const updateScore = () => {
    props.setScore(prev => {
      const newScore = prev + 1;
      return newScore <= props.totalLevels ? newScore : prev;
    })
  }
  
  const reset = () => {
    props.setIndex(prev => prev + 1);
    setSelected(null);
  }

  const isCorrect = (level : any, idx : number) => {
    if (level == null || selected != null) {
      return;
    }

    setSelected(idx);

    if (level.correct.includes(idx)) {
      // Correct Answer
      updateScore();
    }
  }
  
  // Load All Choices
  const options = props.level.choices.map((choice : string, idx : number) => {
    const disabled = selected != null;
    const isSelected = selected == idx;
    const correctChoice = props.level.correct.includes(idx);
    return (
      <button
        className={`px-4 py-2 m-2 border rounded transition
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}
          ${isSelected && correctChoice ? 'bg-green-500 text-white' : ''}
          ${isSelected && !correctChoice ? 'bg-red-500 text-white' : ''}
          `}
        onClick={() => isCorrect(props.level, idx)}
        disabled={disabled}
        key={`level${props.index}choice${idx}`}
      >
        {choice}
      </button>
    )
  })
  return (
    <section>
      {options}
      {selected != null &&
        <button 
          onClick={() => reset()}
          className="px-4 py-2 m-2 border rounded transition bg-white hover:bg-blue-500"
        >
          Next Question
        </button>
      }
      
    </section>
  )
}
export default Choices;