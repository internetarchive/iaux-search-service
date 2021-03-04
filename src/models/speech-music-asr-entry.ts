/**
 * This is the format used for radio transcripts
 */
export interface SpeechMusicASREntry {
  end: number;
  id: number;
  is_music: boolean;
  start: number;
  text: string;
}
