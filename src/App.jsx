import './App.css'

function App() {
  return (
    <div className="app">

      {/* Left Sidebar */}
      <aside className="sidebar">
        <h1 className="logo">Spotify</h1>

        <nav className="main-nav">
          <a href="#">⌂ Home</a>
          <a href="#">⌕ Search</a>
          <a href="#">▣ Your Library</a>
        </nav>

        <div className="playlist-section">
          <h3>Your Playlists</h3>
          <a href="#">Lishay's Playlist</a>
          <a href="#">Chill Vibes</a>
          <a href="#">Coding Mode 🎧</a>
        </div>
      </aside>

      {/* Main Area */}
      <main className="main-content">

        <header className="top-bar">
          <div className="navigation-buttons">
            <button>‹</button>
            <button>›</button>
          </div>

          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="What do you want to play?"
            />
          </div>
        </header>

        <section className="content">
          <h2>Made For You</h2>

          <div className="music-grid">

            <div className="music-card">
              <div className="album-cover">🎧</div>
              <h3>Daily Mix</h3>
              <p>Your favorite songs</p>
            </div>

            <div className="music-card">
              <div className="album-cover">🌙</div>
              <h3>Night Vibes</h3>
              <p>Late night chill music</p>
            </div>

            <div className="music-card">
              <div className="album-cover">💻</div>
              <h3>Coding Mode</h3>
              <p>Focus and code</p>
            </div>

            <div className="music-card">
              <div className="album-cover">✨</div>
              <h3>Discover Weekly</h3>
              <p>Fresh music for you</p>
            </div>

          </div>
        </section>

      </main>

      {/* Bottom Player */}
      <footer className="player">
        <div className="current-song">
          <div className="mini-cover">🎵</div>
          <div>
            <h4>Midnight Dreams</h4>
            <p>Lishay's Playlist</p>
          </div>
        </div>

        <div className="player-controls">
          <button>↶</button>
          <button className="play-button">▶</button>
          <button>↷</button>
        </div>

        <div className="volume">
          🔊 ━━━━━
        </div>
      </footer>

    </div>
  )
}

export default App