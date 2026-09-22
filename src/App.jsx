import { SpeedInsights } from '@vercel/speed-insights/react';
import { useEffect, useRef } from 'react';
import { ImportButton } from './components/ImportButton';
import { PlayerBar } from './components/PlayerBar';
import { PlayerProvider, usePlayer } from './context/PlayerContext';

export default function App() {
  return (
    <div>
      {/* ... */}
      <SpeedInsights />
    </div>
  );
}

const sidebarLinks = [
  { label: 'Home', icon: '⌂' },
  { label: 'Songs', icon: '♪' },
  { label: 'Albums', icon: '◌' },
  { label: 'Artists', icon: '◎' },
  { label: 'Playlists', icon: '▣' },
  { label: 'Favorites', icon: '♥' },
  { label: 'Recently played', icon: '◔' },
];

const sampleTracks = [
  { id: 'demo-1', title: 'Midnight City', artist: 'M83', album: 'Hurry Up, We re Dreaming', duration: 242, url: '' },
  { id: 'demo-2', title: 'Golden', artist: 'Hunters', album: 'Sunset', duration: 211, url: '' },
  { id: 'demo-3', title: 'Clouds', artist: 'The Weekend', album: 'After Hours', duration: 196, url: '' },
  { id: 'demo-4', title: 'Calm Down', artist: 'Rema', album: 'Rave & Roses', duration: 228, url: '' },
  { id: 'demo-5', title: 'Night Drive', artist: 'Ariana', album: 'Dawn', duration: 203, url: '' },
];

const samplePlaylists = [
  { id: 'playlist-1', name: 'Workout', songs: 18 },
  { id: 'playlist-2', name: 'Chill', songs: 11 },
  { id: 'playlist-3', name: 'Night Drive', songs: 9 },
];

function formatDuration(totalSeconds) {
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) return '0:00';
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

function TrackTile({ song, compact = false }) {
  return (
    <div className={`track-tile ${compact ? 'track-tile--compact' : ''}`}>
      <div className="track-art cover-gradient">♫</div>
      <div className="track-copy">
        <strong>{song.title}</strong>
        <span>{song.artist}</span>
      </div>
      {song.mediaType === 'video' && <span className="track-format">MP4</span>}
      {!compact && <span className="track-duration">{formatDuration(song.duration)}</span>}
    </div>
  );
}

function PlaylistTile({ name, count, cover, onPlay }) {
  return (
    <button type="button" className="playlist-card" onClick={onPlay}>
      <div className="playlist-cover cover-gradient">
        {cover ? <img src={cover} alt="" /> : '♪'}
      </div>
      <div className="playlist-meta">
        <strong>{name}</strong>
        <span>{count} songs</span>
      </div>
    </button>
  );
}

function VideoStage({ song, mediaUrl, isPlaying }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !mediaUrl) return;
    video.currentTime = 0;
    if (isPlaying) void video.play().catch(() => {});
  }, [mediaUrl]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !mediaUrl) return;
    if (isPlaying) void video.play().catch(() => {});
    else video.pause();
  }, [isPlaying, mediaUrl]);

  if (!song || song.mediaType !== 'video' || !mediaUrl) return null;

  return (
    <section className="video-stage">
      <div className="section-header">
        <div>
          <p className="eyebrow">Now showing</p>
          <h2>{song.title}</h2>
        </div>
        <span className="track-format">MP4 VIDEO</span>
      </div>
      <video ref={videoRef} src={mediaUrl} muted playsInline className="video-stage-player" aria-label={`${song.title} video`} />
    </section>
  );
}

function AppContent() {
  const { songs, ready, favorites, recent, playlists, playSong, currentSong, mediaUrl, isPlaying } = usePlayer();
  const visibleLibrary = songs.length ? songs : sampleTracks;
  const recentSongs = recent.length ? recent.slice(0, 4) : sampleTracks.slice(0, 4);
  const favoriteSongs = (songs.length ? songs : sampleTracks).filter(
    (song) => favorites.includes(song.id) || ['demo-1', 'demo-3'].includes(song.id),
  );
  const visiblePlaylists = playlists.length ? playlists : samplePlaylists;
  const videoSongs = visibleLibrary.filter((song) => song.mediaType === 'video').slice(0, 6);

  if (!ready) {
    return <div className="loading-screen">Loading your library...</div>;
  }

  return (
    <div className="music-app-shell">
      <aside className="sidebar-panel">
        <div className="brand-block">
          <div className="brand-mark cover-gradient">♫</div>
          <span>Resonate</span>
        </div>

        <nav className="sidebar-nav">
          {sidebarLinks.map(({ label, icon }) => (
            <button key={label} type="button" className={`nav-button ${label === 'Home' ? 'active' : ''}`}>
              <span>{icon}</span>
              {label}
            </button>
          ))}
        </nav>

        <div className="sidebar-section">
          <p className="section-label">Playlists</p>
          <div className="playlist-list">
            {visiblePlaylists.map((playlist) => (
              <button key={playlist.id || playlist.name} type="button" className="playlist-link">
                {playlist.name}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div className="search-box">
            <span>⌕</span>
            <input type="text" placeholder="Search songs, artists, albums..." />
          </div>
          <ImportButton label="Add music" />
        </header>

        <div className="page-content">
          <section className="hero-banner">
            <div>
              <p className="eyebrow">Good evening</p>
              <h1>{visibleLibrary.length} songs in your library</h1>
            </div>
            <button type="button" className="primary-action">Play all</button>
          </section>

          <section className="stats-row">
            <div className="stat-card">
              <span>Songs</span>
              <strong>{visibleLibrary.length}</strong>
            </div>
            <div className="stat-card">
              <span>Favorites</span>
              <strong>{favoriteSongs.length}</strong>
            </div>
            <div className="stat-card">
              <span>Recent</span>
              <strong>{recentSongs.length}</strong>
            </div>
          </section>

          <section className="content-section">
            <div className="section-header">
              <h2>Recently played</h2>
              <button type="button">See all</button>
            </div>
            <div className="card-row">
              {recentSongs.map((song) => (
                  <button
                    key={song.id}
                    type="button"
                    className="mini-card"
                    onClick={() => playSong(song.id, visibleLibrary.map((item) => item.id))}
                  >
                  <div className="mini-card-art cover-gradient">♫</div>
                  <strong>{song.title}</strong>
                  <span>{song.artist}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="content-section">
            <div className="section-header">
              <h2>Your playlists</h2>
              <button type="button">Create</button>
            </div>
            <div className="playlist-grid">
              {visiblePlaylists.map((playlist) => (
                <PlaylistTile
                  key={playlist.id || playlist.name}
                  name={playlist.name}
                  count={playlist.songs?.length ?? playlist.count ?? 0}
                  cover={playlist.cover}
                  onPlay={() => {
                    const firstSong = playlist.songs?.[0];
                    if (firstSong) playSong(firstSong, playlist.songs);
                  }}
                />
              ))}
            </div>
          </section>

          {videoSongs.length > 0 && (
            <section className="content-section">
              <div className="section-header">
                <h2>Luxury Vibes videos</h2>
                <span className="track-format">MP4</span>
              </div>
              <div className="video-track-grid">
                {videoSongs.map((song) => (
                  <button key={song.id} type="button" className="video-track-card" onClick={() => playSong(song.id, videoSongs.map((item) => item.id))}>
                    <div className="video-track-art cover-gradient">▶</div>
                    <strong>{song.title}</strong>
                    <span>{song.artist}</span>
                  </button>
                ))}
              </div>
            </section>
          )}

          <VideoStage song={currentSong} mediaUrl={mediaUrl} isPlaying={isPlaying} />

          <section className="content-section">
            <div className="section-header">
              <h2>Favorites</h2>
              <button type="button">Open</button>
            </div>
            <div className="list-stack">
              {favoriteSongs.length ? (
                favoriteSongs.slice(0, 4).map((song) => <TrackTile key={song.id} song={song} compact />)
              ) : (
                <p className="empty-message">Add a few favorites to see them here.</p>
              )}
            </div>
          </section>
        </div>
      </main>

      <PlayerBar />
    </div>
  );
}

export default function App() {
  return (
    <PlayerProvider>
      <AppContent />
    </PlayerProvider>
  );
}
