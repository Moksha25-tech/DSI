import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { AppState, Preferences, ScreenState } from '../types';

interface AppContextType {
  state: AppState;
  setScreen: (screen: ScreenState) => void;
  updatePreferences: (prefs: Partial<Preferences>) => void;
  setVideoState: (timestamp: number, paused: boolean) => void;
  setQuestionAndTranscript: (question: string, transcript: string) => void;
  resetToVideo: () => void;
}

const defaultPreferences: Preferences = {
  communication: 'text-isl',
  style: 'step-by-step',
  speed: '1.0x'
};

const initialState: AppState = {
  preferences: defaultPreferences,
  currentScreen: 'PREFERENCES',
  videoTimestamp: 522, // 08:42
  videoPaused: false,
  currentQuestion: '',
  currentTranscript: ''
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(initialState);

  const setScreen = (screen: ScreenState) => {
    setState(prev => ({ ...prev, currentScreen: screen }));
  };

  const updatePreferences = (prefs: Partial<Preferences>) => {
    setState(prev => ({
      ...prev,
      preferences: { ...prev.preferences, ...prefs }
    }));
  };

  const setVideoState = (timestamp: number, paused: boolean) => {
    setState(prev => ({
      ...prev,
      videoTimestamp: timestamp,
      videoPaused: paused
    }));
  };

  const setQuestionAndTranscript = (question: string, transcript: string) => {
    setState(prev => ({
      ...prev,
      currentQuestion: question,
      currentTranscript: transcript
    }));
  };

  const resetToVideo = () => {
    setState(prev => ({
      ...prev,
      currentScreen: 'VIDEO',
      videoPaused: false
    }));
  };

  return (
    <AppContext.Provider value={{ state, setScreen, updatePreferences, setVideoState, setQuestionAndTranscript, resetToVideo }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
