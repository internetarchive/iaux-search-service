export type HitType = 'item' | 'text';

export interface FieldSchema {
  mapping: string,
  multivalue: boolean,
  optional?: boolean,
  comment?: string
}

export interface SearchHitSchema {
  hit_type: HitType,
  field_properties: Record<string, FieldSchema>
}