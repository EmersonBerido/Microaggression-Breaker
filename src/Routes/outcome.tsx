// Contain: Thanks for playing, Amount missed, give a title based off score, ask for optional reflection
// load submission once clicking "Done"
import { useLocation } from "react-router-dom"
function Outcome() {
  // props will contain the total amount of questions & total correct answers
  const location = useLocation()
  const score = location.state?.score;
  return (
    <>
      Score is {score}
    </>
  )
}

export default Outcome