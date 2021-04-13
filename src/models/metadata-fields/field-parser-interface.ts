export type FieldParserRawValue = string | number | boolean;

export interface FieldParserInterface<T> {
  parseValue(rawValue: FieldParserRawValue): T | undefined;
}
