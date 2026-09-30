export type CommunicationPreference = 'isl-only' | 'simplified-text' | 'visual' | 'text-isl';
export type ExplanationStyle = 'short' | 'step-by-step';
export type Speed = '0.75x' | '1.0x' | '1.25x';

export interface Preferences {
  communication: CommunicationPreference;
  style: ExplanationStyle;
  speed: Speed;
}

export type ScreenState = 'PREFERENCES' | 'VIDEO' | 'ASK_DOUBT' | 'ANSWER' | 'HUMAN_FALLBACK';

export interface AppState {
  preferences: Preferences;
  currentScreen: ScreenState;
  videoTimestamp: number; // in seconds
  videoPaused: boolean;
  currentQuestion: string;
  currentTranscript: string;
}
