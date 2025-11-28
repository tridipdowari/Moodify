import { moods } from "../data/moods";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleMoodClick = (mood) => {
    localStorage.setItem("lastMood", mood.name);
    navigate(`/playlist/${mood.name}`);
  };

  return (
    <div className="home">
      <h1 className="title">Moodify</h1>

      <div className="moods-container">
        {moods.map((m) => (
          <div
            key={m.name}
            className="mood-card"
            style={{ backgroundColor: m.color }}
            onClick={() => handleMoodClick(m)}
          >
            {m.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;