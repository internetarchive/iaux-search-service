/* eslint-disable @typescript-eslint/camelcase */

/**
 * This is the format used for radio transcripts
 */
export class SpeechMusicASREntry {
  end: number;
  id: number;
  is_music: boolean;
  start: number;
  text: string;

  constructor(options: {
    end: number;
    id: number;
    is_music: boolean;
    start: number;
    text: string;
  }) {
    this.end = options.end;
    this.id = options.id;
    this.is_music = options.is_music;
    this.start = options.start;
    this.text = options.text;
  }
}
