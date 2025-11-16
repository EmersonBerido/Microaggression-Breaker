function Submission() {
  type Level = {
  theme : string;
  scenario : string;
  choices : string[];
  correct : number[]; // indexes of correct answers
  outcomes : string[]; // outcomes of respected answers
  explanation : string; // How this microaggression is impactful
}
  return (
    <body>
      <h1>Submission</h1>
    </body>
  )
}

export default Submission;