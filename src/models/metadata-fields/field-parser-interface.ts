export interface FieldParserInterface<T> {
  parseValue(rawValue: string): T | undefined;
}
