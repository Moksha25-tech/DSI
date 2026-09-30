import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import './AskDoubtScreen.css';

const AskDoubtScreen: React.FC = () => {
  const { state, setScreen, setQuestionAndTranscript } = useApp();
  const [question, setQuestion] = useState(state.currentQuestion);

  const promptChips = [
    "What does chlorophyll do here?",
    "Can plants make food in darkness?",
    "Where is the light absorbed?"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      setQuestionAndTranscript(question, state.currentTranscript);
      setScreen('ANSWER');
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="ask-doubt-screen">
      <div className="modal-container glass-panel">
        <div className="modal-header">
          <h2>Ask a Doubt</h2>
          <button className="close-btn" onClick={() => setScreen('VIDEO')}>✕</button>
        </div>
        
        <div className="modal-content">
          <div className="context-package">
            <div className="context-header">
              <span className="badge">Context Attached</span>
              <span className="timestamp">Video paused at {formatTime(state.videoTimestamp)}</span>
            </div>
            <p className="transcript-snippet">
              "...{state.currentTranscript}..."
            </p>
          </div>

          <form onSubmit={handleSubmit} className="question-form">
            <label htmlFor="question-input">What's your question?</label>
            <textarea 
              id="question-input"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question here..."
              rows={4}
              autoFocus
            />
            
            <div className="prompt-chips">
              <span className="chips-label">Quick ask:</span>
              {promptChips.map((chip, idx) => (
                <button 
                  key={idx} 
                  type="button" 
                  className="chip-btn"
                  onClick={() => setQuestion(chip)}
                >
                  {chip}
                </button>
              ))}
            </div>

            <div className="form-actions">
              <div className="delivery-info">
                <span className="info-icon">⚡</span>
                <span>Response will be adapted to: <strong>{state.preferences.communication.replace('-', ' ').toUpperCase()}</strong> ({state.preferences.style})</span>
              </div>
              <button 
                type="submit" 
                className="btn-primary"
                disabled={!question.trim()}
              >
                Submit Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AskDoubtScreen;
