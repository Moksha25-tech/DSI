import React from 'react';
import { useApp } from '../context/AppContext';
import './HumanFallbackScreen.css';

const HumanFallbackScreen: React.FC = () => {
  const { state, resetToVideo } = useApp();
  const { currentQuestion, currentTranscript, videoTimestamp } = state;

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="fallback-screen">
      <div className="fallback-container card">
        <div className="fallback-header">
          <div className="icon-wrapper">
            <span className="material-symbols-outlined icon">support_agent</span>
          </div>
          <h1>Human Assistance Required</h1>
          <p className="subtitle">We could not provide an automated supported explanation for this question.</p>
        </div>

        <div className="fallback-content">
          <p className="explanation-text">
            This concept may require specialized signing or additional context that our automated system cannot guarantee is fully accurate. We have packaged your question and context for Dr. Ananya Sharma.
          </p>

          <div className="context-package-review">
            <h3>Context Package</h3>
            
            <div className="package-details">
              <div className="detail-row">
                <span className="label">Question:</span>
                <span className="value">"{currentQuestion}"</span>
              </div>
              <div className="detail-row">
                <span className="label">Video:</span>
                <span className="value">Photosynthesis: How Plants Make Food</span>
              </div>
              <div className="detail-row">
                <span className="label">Timestamp:</span>
                <span className="value">{formatTime(videoTimestamp)}</span>
              </div>
              <div className="detail-row">
                <span className="label">Transcript:</span>
                <span className="value italic">"{currentTranscript}"</span>
              </div>
            </div>
          </div>

          <div className="educator-profile">
            <div className="avatar">Dr. S</div>
            <div className="profile-info">
              <h4>Dr. Ananya Sharma</h4>
              <p>Biology Educator & ISL Specialist</p>
            </div>
            <button className="btn-primary ask-educator-btn">
              Ask Educator
            </button>
          </div>
          
          <div className="reassurance-states">
            <div className="state-item">
              <span className="icon">🔒</span>
              <div className="state-text">
                <strong>Playback Locked</strong>
                <span>Video position preserved</span>
              </div>
            </div>
            <div className="state-item">
              <span className="icon">📹</span>
              <div className="state-text">
                <strong>ISL Video Response</strong>
                <span>Human educator follow-up</span>
              </div>
            </div>
            <div className="state-item">
              <span className="icon">⭐</span>
              <div className="state-text">
                <strong>Zero Penalty</strong>
                <span>Asking questions does not affect grades</span>
              </div>
            </div>
          </div>
        </div>

        <div className="fallback-footer">
          <button className="btn-secondary" onClick={resetToVideo}>
            Return to Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default HumanFallbackScreen;
