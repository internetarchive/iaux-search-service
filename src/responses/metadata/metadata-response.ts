/* eslint-disable @typescript-eslint/no-explicit-any */
import { File } from '../../models/file';
import { Metadata } from '../../models/metadata';
import { Review } from '../../models/review';
import { SpeechMusicASREntry } from '../../models/speech-music-asr-entry';

/**
 * The main top-level reponse when fetching Metadata
 *
 * @export
 * @class MetadataResponse
 */
export class MetadataResponse {
  rawResponse: any;

  created: number;

  d1: string;

  d2: string;

  dir: string;

  files: File[];

  files_count: number;

  item_last_updated: number;

  item_size: number;

  metadata: Metadata;

  server: string;

  uniq: number;

  workable_servers: string[];

  speech_vs_music_asr?: SpeechMusicASREntry[];

  reviews?: Review[];

  constructor(json: Record<string, any>) {
    this.rawResponse = json;
    this.created = json.created;
    this.d1 = json.d1;
    this.d2 = json.d2;
    this.dir = json.dir;
    this.files = json.files?.map((file: any) => new File(file));
    this.files_count = json.files_count;
    this.item_last_updated = json.item_last_updated;
    this.item_size = json.item_size;
    this.metadata = new Metadata(json.metadata);
    this.server = json.server;
    this.uniq = json.uniq;
    this.workable_servers = json.workable_servers;
    this.speech_vs_music_asr = json.speech_vs_music_asr;
    this.reviews = json.reviews?.map((entry: any) => new Review(entry));
  }
}
