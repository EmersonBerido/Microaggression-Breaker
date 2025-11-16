import {useNavigate} from "react-router-dom";


function Home() {
  const navigate = useNavigate();
  return (
    <main>
      <h1>Microaggression Breaker</h1>
      <button onClick={() => navigate("/game")}>Play</button>
      <button onClick={() => navigate("/community")}>Community</button>
      <button onClick={() => navigate("/submit")}>Add Level</button>
    </main>
  )
}

export default Home;