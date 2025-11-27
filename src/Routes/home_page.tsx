import {useNavigate} from "react-router-dom";


function Home() {
  const navigate = useNavigate();
  async function testServer() {
    try {
      fetch(`${import.meta.env.VITE_SERVER_URL}/`)
        .then(response => response.json())
        .then(data => console.log("Server response: ", data.message));
    } catch (err) {
      console.error("Server not reachable: ", err);
    }
  }

  testServer();
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