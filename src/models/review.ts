/* eslint-disable @typescript-eslint/no-explicit-any */
import { Memoize } from 'typescript-memoize';
import { DateParser, NumberParser } from '@internetarchive/field-parsers';

export class Review {
  rawValue: Record<string, any>;

  get reviewbody(): string | undefined {
    return this.rawValue.reviewbody;
  }

  get reviewtitle(): string | undefined {
    return this.rawValue.reviewtitle;
  }

  get reviewer(): string | undefined {
    return this.rawValue.reviewer;
  }

  @Memoize() get reviewdate(): Date | undefined {
    return this.rawValue.reviewdate
      ? DateParser.shared.parseValue(this.rawValue.reviewdate)
      : undefined;
  }

  @Memoize() get createdate(): Date | undefined {
    return this.rawValue.createdate
      ? DateParser.shared.parseValue(this.rawValue.createdate)
      : undefined;
  }

  @Memoize() get stars(): number | undefined {
    return this.rawValue.stars
      ? NumberParser.shared.parseValue(this.rawValue.stars)
      : undefined;
  }

  constructor(json: Record<string, any>) {
    this.rawValue = json;
  }
}
