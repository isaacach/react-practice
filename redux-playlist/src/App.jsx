import "./styles.css";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";

function App() {
  const handleResetClick = () => {
    //
  };

  return (
    <div className="container">
      <button onClick={() => handleResetClick()} className="button-reset">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  )
}

export default App
