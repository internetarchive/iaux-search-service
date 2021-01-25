import {
  FieldParserInterface,
  FieldParserRawValue,
} from '../field-parser-interface';
import { MetadataField } from '../metadata-field';

export enum PageProgression {
  RightToLeft = 'rl',
  LeftToRight = 'lr',
}

export class PageProgressionParser
  implements FieldParserInterface<PageProgression> {
  // use a shared static instance for performance instead of
  // instantiating a new instance for every use
  static shared = new PageProgressionParser();

  parseValue(rawValue: FieldParserRawValue): PageProgression | undefined {
    if (typeof rawValue !== 'string') return undefined;

    switch (rawValue) {
      case 'rl':
        return PageProgression.RightToLeft;
      case 'lr':
        return PageProgression.LeftToRight;
      default:
        return undefined;
    }
  }
}

export class PageProgressionField extends MetadataField<
  PageProgression,
  PageProgressionParser
> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(rawValue: any) {
    super(PageProgressionParser.shared, rawValue);
  }
}
