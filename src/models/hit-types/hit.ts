import { ItemHit } from "./item-hit";
import { TextHit } from "./text-hit";

/**
 * Union of the different hit_type values returned by the PPS.
 * There will probably be more of these.
 */
export type HitType = 'item' | 'text';

/**
 * A type having all properties that exist on either T or U.
 */
type Merge<T, U> = {
  [K in (keyof T | keyof U)]: (
    K extends keyof T ? T[K] :
    K extends keyof U ? U[K] :
    never
  )
};

/**
 * Applying this to the Hit type forces Intellisense to present Hit as
 * a type in its own right, and not as the underlying merge type it aliases.
 * Really just to keep things clean at the call site.
 */
interface PreserveAlias {}

/**
 * Hit is an expansive type definition encompassing all the optional 
 * and required properties that may occur on any type of hit returned 
 * by the various search backends. (Most metadata properties are
 * optional anyway).
 */
export type Hit = Partial<Merge<ItemHit, TextHit>> & PreserveAlias;

/**
 * A factory for creating instances of various hit types.
 */
export class HitFactory {
  private constructor() {}

  static createFromType(type: HitType, hit: Hit): Hit {
    switch (type) {
      case 'item':
        return new ItemHit(hit);
      case 'text':
        return new TextHit(hit);
      default:
        throw new Error(`Unrecognized hit type: ${type}`);
    }
  }
}