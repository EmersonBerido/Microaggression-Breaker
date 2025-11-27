import {useState} from "react";

type Level = {
  theme : string;
  scenario : string;
  choices : string[];
  correct : number[]; // indexes of correct answers
  explanation : string; // How this microaggression is impactful
}

function Submission() {
  // const [choiceAmt, setChoiceAmt] = useState(2);
  const [choices, setChoices] = useState<string[]>(["", ""]);
  const [correctChoices, setCorrectChoices] = useState<number[]>([]);

  function addChoice() {
    if (choices.length >= 4) {
      alert("Maximum of 4 choices allowed");
      return;
    }

    setChoices(prev => [...prev, ""]);
  }

  function toggleCorrect(idx : number) {
    // mark choice as correct or incorrect
    setCorrectChoices(prev => {
      if (prev.includes(idx)) {
        // Remove it
        return prev.filter(i => i !== idx);
      } 

      return [...prev, idx];
    });
  }

  return (
    <main>
      <input 
        type="text" placeholder="Theme" name="theme"
      />

      <textarea 
        placeholder="Scenario" name="scenario"
      />

      <button 
        onClick={addChoice}
      >
        Add Choice
      </button>

      {choices.map((choice, idx) => {
        return (
          <div key={`choiceDiv${idx}`}>
            <button 
              className={`
                  px-2 py-1 m-2 border rounded transition
                  ${correctChoices.includes(idx) ? 'bg-green-500' : 'bg-red-500'}
                `}
              onClick={() => toggleCorrect(idx)} type="button"
            >
            </button>

            <input 
              className={`
                px-4 py-2 m-2 border rounded transition
                ${correctChoices.includes(idx) ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`
              }
              type="text" placeholder={`Choice ${idx + 1}`} name={`choice${idx}`} 
            />
          </div>
        )
      })}

      <textarea 
        placeholder="Explanation" name="explanation"
      />

      <button type="submit">Done !</button>
    </main>
  )
}

export default Submission;