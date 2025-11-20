import {useNavigate} from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <main>
      <h1 className="text-white">Microaggression Breaker</h1>
      <button className="px-4 py-2 bg-blue-500 text-white border border-white" onClick={() => navigate("/game")}>Play</button>
      <button className="px-4 py-2 bg-blue-500 text-white border border-white" onClick={() => navigate("/community")}>Community</button>
      <button className="px-4 py-2 bg-blue-500 text-white border border-white" onClick={() => navigate("/submit")}>Add Level</button>
    </main>
  )
}

export default Home;