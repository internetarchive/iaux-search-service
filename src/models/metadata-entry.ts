import { MetadataRawValue } from "./metadata-fields/metadata-field";

export abstract class MetadataEntry {
  static fromRaw(rawValue: MetadataRawValue | Record<string, any>): MetadataEntry | null {
    throw new Error('Child class must implement static from(rawValue)');
  }
}
