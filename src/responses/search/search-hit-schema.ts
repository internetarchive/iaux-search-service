/**
 * Union of the different hit_type values returned by the PPS
 */
export type HitType = 'item' | 'text';

/**
 * Schema for individual field types within a hit
 */
export interface FieldSchema {
  mapping: string,
  multivalue: boolean,
  optional?: boolean,
  comment?: string
}

/**
 * Top-level schema structure returned by the PPS
 */
export interface SearchHitSchema {
  hit_type: HitType,
  field_properties: Record<string, FieldSchema>
}