import React from 'react';
import { useApp } from './context/AppContext';
import PreferencesScreen from './screens/PreferencesScreen';
import VideoScreen from './screens/VideoScreen';
import AskDoubtScreen from './screens/AskDoubtScreen';
import AnswerScreen from './screens/AnswerScreen';
import HumanFallbackScreen from './screens/HumanFallbackScreen';
import './App.css';

const AppContent: React.FC = () => {
  const { state } = useApp();

  return (
    <div className="app-container">
      {state.currentScreen === 'PREFERENCES' && <PreferencesScreen />}
      {state.currentScreen === 'VIDEO' && <VideoScreen />}
      {state.currentScreen === 'ASK_DOUBT' && <AskDoubtScreen />}
      {state.currentScreen === 'ANSWER' && <AnswerScreen />}
      {state.currentScreen === 'HUMAN_FALLBACK' && <HumanFallbackScreen />}
    </div>
  );
};

export default AppContent;
