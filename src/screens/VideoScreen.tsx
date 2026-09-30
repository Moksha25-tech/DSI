import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import './VideoScreen.css';

const VideoScreen: React.FC = () => {
  const { state, setScreen, setVideoState, setQuestionAndTranscript } = useApp();
  const { preferences, videoPaused, videoTimestamp } = state;

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const currentTranscript = "Chlorophyll captures solar radiation, transforming photonic energy into chemical bonds...";
  
  // Update state when we enter the screen just to be sure we have the transcript
  useEffect(() => {
    setQuestionAndTranscript('', currentTranscript);
  }, []);

  const handleAskDoubt = () => {
    setVideoState(videoTimestamp, true); // pause video
    setScreen('ASK_DOUBT');
  };

  const handleExplainThis = () => {
    setVideoState(videoTimestamp, true);
    setQuestionAndTranscript("Please explain this concept.", currentTranscript);
    setScreen('ANSWER');
  };

  return (
    <div className="video-screen">
      <header className="video-header">
        <div className="breadcrumb">
          NCERT Class 10 Biology &gt; Photosynthesis
        </div>
        <h1>Photosynthesis: How Plants Make Food</h1>
      </header>

      <div className="video-layout">
        <main className="main-video-area">
          <div className="video-player mock-video">
            <div className="video-placeholder">
              <span className="play-icon">▶</span>
              <p>Educational Video Content</p>
            </div>
            
            <div className="video-controls">
              <button 
                className="control-btn"
                onClick={() => setVideoState(videoTimestamp, !videoPaused)}
              >
                {videoPaused ? '▶ Play' : '⏸ Pause'}
              </button>
              <div className="timeline-container">
                <div className="timeline-bar">
                  <div className="timeline-progress" style={{ width: '45%' }}></div>
                  <div className="timeline-marker" style={{ left: '45%' }}></div>
                </div>
              </div>
              <div className="timestamp-display">{formatTime(videoTimestamp)} / 15:20</div>
            </div>
          </div>

          <div className="transcript-panel card">
            <h3>Current Context {videoPaused && <span className="badge">Paused</span>} {!videoPaused && <span className="badge live-badge">Live Sync</span>}</h3>
            <p className="transcript-text">"{currentTranscript}"</p>
            <div className="glosses">
              <span className="gloss-token">Chlorophyll</span>
              <span className="gloss-token">Chloroplast</span>
              <span className="gloss-token">Photolysis</span>
            </div>
          </div>
        </main>

        <aside className="accessibility-sidebar">
          {/* ISL Interpreter Area - shown if ISL is part of preferences */}
          {(preferences.communication === 'isl-only' || preferences.communication === 'text-isl') && (
            <div className="isl-interpreter card">
              <div className="isl-placeholder">
                <div className="interpreter-avatar">👤</div>
                <p>ISL Interpreter Feed</p>
                <div className="speed-badge">{preferences.speed} Speed</div>
              </div>
            </div>
          )}

          <div className="action-panel card">
            <h3>Learning Assistance</h3>
            <p>Get an adaptive explanation for the current concept.</p>
            
            <div className="action-buttons">
              <button className="btn-primary" onClick={handleAskDoubt}>
                Ask a Doubt
              </button>
              <button className="btn-secondary" onClick={handleExplainThis}>
                Explain This Context
              </button>
            </div>
          </div>
          
          <div className="timestamp-anchors card">
            <h3>Key Moments</h3>
            <ul className="anchor-list">
              <li><button className="anchor-btn">02:10 Leaf Anatomy</button></li>
              <li><button className="anchor-btn active">08:42 Chlorophyll Activation</button></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default VideoScreen;
