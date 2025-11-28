import { useParams, useNavigate } from "react-router-dom";
import { playlists } from "../data/playlists";
import "./Playlist.css";

function Playlist() {
  const { moodName } = useParams();
  const navigate = useNavigate();

  const songs = playlists[moodName];

  return (
    <div className="playlist">
      <button className="back" onClick={() => navigate("/")}>← Back</button>

      <h2>{moodName} Playlist</h2>

      <div className="songs">
        {songs.map((s, i) => (
          <div className="song-card" key={i}>
            <h3>{s.title}</h3>
            <p>{s.artist}</p>
            <span>{s.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;