import React from 'react';
import { useApp } from '../context/AppContext';
import type { CommunicationPreference, ExplanationStyle, Speed } from '../types';
import './PreferencesScreen.css';

const PreferencesScreen: React.FC = () => {
  const { state, updatePreferences, setScreen } = useApp();
  const { preferences } = state;

  const handleCommChange = (val: CommunicationPreference) => {
    updatePreferences({ communication: val });
  };

  const handleStyleChange = (val: ExplanationStyle) => {
    updatePreferences({ style: val });
  };

  const handleSpeedChange = (val: Speed) => {
    updatePreferences({ speed: val });
  };

  return (
    <div className="preferences-screen">
      <div className="pref-header">
        <div className="step-badge">STEP 1 OF 2 • ACCESSIBILITY SETUP</div>
        <h1>How would you like to learn?</h1>
        <p>Choose how explanations, vocabulary, and concepts should be presented during your video lessons.</p>
      </div>

      <div className="pref-content">
        <section className="pref-section">
          <h2><span className="step-num">1</span> Preferred explanation format</h2>
          <div className="options-grid">
            <button 
              className={`option-card ${preferences.communication === 'isl-only' ? 'selected' : ''}`}
              onClick={() => handleCommChange('isl-only')}
            >
              <span className="material-symbols-outlined card-icon">sign_language</span>
              <h3>ISL Only <span className="tag">VIDEO FEED</span></h3>
              <p>Indian Sign Language video interpretation with signed concept demonstration and fingerspelling.</p>
            </button>
            <button 
              className={`option-card ${preferences.communication === 'simplified-text' ? 'selected' : ''}`}
              onClick={() => handleCommChange('simplified-text')}
            >
              <span className="material-symbols-outlined card-icon">menu_book</span>
              <h3>Simplified text <span className="tag">TEXT FIRST</span></h3>
              <p>Clear, short sentences using foundational vocabulary, syntax simplifications, and key bullet points.</p>
            </button>
            <button 
              className={`option-card ${preferences.communication === 'visual' ? 'selected' : ''}`}
              onClick={() => handleCommChange('visual')}
            >
              <span className="material-symbols-outlined card-icon">schema</span>
              <h3>Visual explanation <span className="tag">GRAPHIC</span></h3>
              <p>Diagrams, annotated visual steps, highlighted biological workflows, and illustrated graphic timelines.</p>
            </button>
            <button 
              className={`option-card text-isl-card ${preferences.communication === 'text-isl' ? 'selected' : ''}`}
              onClick={() => handleCommChange('text-isl')}
            >
              <span className="material-symbols-outlined card-icon">interpreter_mode</span>
              <h3>Text + ISL <span className="tag tag-recommended">RECOMMENDED</span></h3>
              <p>Synchronized Indian Sign Language video paired with highlighted, high-contrast text and real-time captioning.</p>
            </button>
          </div>
        </section>

        <section className="pref-section">
          <h2><span className="step-num">2</span> Explanation style</h2>
          <div className="options-flex">
            <button 
              className={`style-card ${preferences.style === 'short' ? 'selected' : ''}`}
              onClick={() => handleStyleChange('short')}
            >
              <div className="radio"></div>
              <div>
                <h3>Short <span className="tag">Core brief</span></h3>
                <p>Quick summary of the main concept in 1-2 key points. Best for quick revision or experienced signers.</p>
              </div>
            </button>
            <button 
              className={`style-card step-card ${preferences.style === 'step-by-step' ? 'selected' : ''}`}
              onClick={() => handleStyleChange('step-by-step')}
            >
              <div className="radio"></div>
              <div>
                <h3>Step-by-step <span className="tag tag-default">DEFAULT</span></h3>
                <p>Breaks concepts into numbered sequential visual parts with pause triggers and sign repetitions.</p>
              </div>
            </button>
          </div>
        </section>

        <div className="preview-card">
          <div className="preview-info">
            <span className="material-symbols-outlined icon">preview</span>
            <div>
              <strong>Live Setup Preview</strong>
              <p>Dual Stream (Video + ISL) • Step-by-step breakdowns enabled • {preferences.speed} Sign speed</p>
            </div>
          </div>
          <div className="verified-badge">
            <span className="material-symbols-outlined icon">verified</span>
            Pre-configured for Biology 101
          </div>
        </div>
        
        <div className="pref-footer">
          <button className="btn-primary continue-btn" onClick={() => setScreen('VIDEO')}>
            Continue to Video Lesson
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <div className="footer-hint">
            <span className="material-symbols-outlined icon">tune</span>
            <p>You can adjust your preferences at any time during any video lesson using the bottom toolbar.</p>
          </div>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <span className="material-symbols-outlined icon">speed</span>
          <div>
            <h4>Adjustable Signing Speed</h4>
            <p>Control ISL interpreter pace independently (0.75x - 1.25x).</p>
            <div className="speed-toggles mt-2">
              {(['0.75x', '1.0x', '1.25x'] as Speed[]).map(speed => (
                <button 
                  key={speed}
                  className={`pill-btn ${preferences.speed === speed ? 'selected' : ''}`}
                  onClick={() => handleSpeedChange(speed)}
                >
                  {speed}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="feature-card">
          <span className="material-symbols-outlined icon">spellcheck</span>
          <div>
            <h4>Interactive Glosses</h4>
            <p>Tap any technical term in transcript for instant fingerspelling clip.</p>
          </div>
        </div>
        <div className="feature-card">
          <span className="material-symbols-outlined icon">pan_tool</span>
          <div>
            <h4>Custom Docking</h4>
            <p>Reposition sign interpreter window to top, bottom, or 50/50 split.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferencesScreen;
