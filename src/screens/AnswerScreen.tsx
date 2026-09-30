import React from 'react';
import { useApp } from '../context/AppContext';
import './AnswerScreen.css';

const AnswerScreen: React.FC = () => {
  const { state, setScreen, resetToVideo } = useApp();
  const { preferences, currentQuestion, videoTimestamp } = state;

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const isIsl = preferences.communication === 'isl-only' || preferences.communication === 'text-isl';
  const isVisual = preferences.communication === 'visual';
  const isTextFirst = preferences.communication === 'simplified-text';
  const isShort = preferences.style === 'short';

  return (
    <div className="answer-screen">
      <header className="answer-header">
        <div className="breadcrumb">
          NCERT Class 10 Biology &gt; Photosynthesis &gt; Doubt Resolution
        </div>
        <h1>Answer: {currentQuestion}</h1>
        <div className="context-badge">
          <span className="material-symbols-outlined icon">verified</span>
          Verified NCERT / ISLRTC curriculum content • Based on video at {formatTime(videoTimestamp)}
        </div>
      </header>

      <div className={`answer-layout ${isIsl ? 'has-isl' : ''}`}>
        
        {/* TEXT CONTENT AREA */}
        <main className="text-explanation card">
          <h2>Explanation</h2>
          
          {isShort ? (
            <div className="short-explanation">
              <p>Plants use chlorophyll to absorb light energy. This energy drives reactions to produce glucose (food) and oxygen.</p>
            </div>
          ) : (
            <div className="step-by-step-explanation">
              <ol className="steps-list">
                <li>
                  <h3>1. Light Absorption</h3>
                  <p>Plants use chlorophyll to absorb light energy.</p>
                </li>
                <li>
                  <h3>2. Energy Conversion</h3>
                  <p>The absorbed light energy drives the reactions of photosynthesis.</p>
                </li>
                <li>
                  <h3>3. Glucose Production</h3>
                  <p>The plant uses the resulting energy to produce glucose.</p>
                </li>
              </ol>
            </div>
          )}

          {/* If simplified text is preferred, show gloss tokens heavily */}
          {isTextFirst && (
             <div className="gloss-callout mt-4">
                <strong>Key Terms:</strong>
                <div className="glosses">
                  <span className="gloss-token">Chlorophyll (क्लोरोफिल)</span>
                  <span className="gloss-token">Glucose (ग्लूकोज)</span>
                </div>
             </div>
          )}

          {/* VISUAL DIAGRAM AREA */}
          {(isVisual || preferences.communication === 'text-isl' || isTextFirst) && (
            <div className="visual-diagram mt-6">
              <h3>Chemical Reaction</h3>
              <div className="reaction-box">
                <span className="formula">H₂O + CO₂ + Light → C₆H₁₂O₆ + O₂</span>
              </div>
              {isVisual && (
                <div className="graphic-placeholder">
                  <span className="icon">🌿</span>
                  <p>Visual diagram showing Sun emitting light to a Leaf, converting Water and Carbon Dioxide into Glucose and Oxygen.</p>
                </div>
              )}
            </div>
          )}
        </main>

        {/* ISL INTERPRETER AREA */}
        {isIsl && (
          <aside className="isl-content card">
            <h2>ISL Interpretation</h2>
            <div className="isl-player">
              <div className="isl-placeholder-video">
                <div className="interpreter-avatar">👤</div>
                <p>Interpreter responding to: "{currentQuestion}"</p>
                <div className="speed-badge">{preferences.speed} Speed</div>
              </div>
              
              <div className="isl-gloss-sequence mt-4">
                <h3>Gloss Sequence:</h3>
                <div className="sequence-track">
                  <span className="gloss-item">SUN-LIGHT</span>
                  <span className="arrow">→</span>
                  <span className="gloss-item">LEAF ABSORB</span>
                  <span className="arrow">→</span>
                  <span className="gloss-item">FOOD ENERGY MAKE</span>
                </div>
              </div>
            </div>
          </aside>
        )}
      </div>

      <footer className="answer-footer">
        <button className="btn-secondary fallback-btn" onClick={() => setScreen('HUMAN_FALLBACK')}>
          Not really / Need Human Help
        </button>
        <button className="btn-primary" onClick={resetToVideo}>
          Resume Video
        </button>
      </footer>
    </div>
  );
};

export default AnswerScreen;
