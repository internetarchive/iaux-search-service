import { ItemHit } from './item-hit';
import { TextHit } from './text-hit';

/**
 * Union of the different hit_type values returned by the PPS.
 * There will probably be more of these.
 */
export type HitType = 'item' | 'text';

/**
 * Applying this to the Result type forces Intellisense to present Result as
 * a type in its own right, and not as the underlying merge type it aliases.
 * Really just to keep things clean at the call site.
 */
interface PreserveAlias {} // eslint-disable-line @typescript-eslint/no-empty-interface

/**
 * Result is an expansive type definition encompassing all the optional
 * and required properties that may occur on any type of search result
 * ('hit') returned by the various search backends. (Most metadata
 * properties are optional anyway).
 */
export type Result = Partial<ItemHit & TextHit> & PreserveAlias;

/**
 * A factory for creating instances of various hit types.
 */
export class HitFactory {
  private constructor() {
    // This is only here to ensure the constructor is private.
  }

  static createFromType(type: HitType, result: Result): Result {
    switch (type) {
      case 'item':
        return new ItemHit(result);
      case 'text':
        return new TextHit(result);
      default:
        // The hit type doesn't tell us what to construct, so just return the input
        return result;
    }
  }
}
