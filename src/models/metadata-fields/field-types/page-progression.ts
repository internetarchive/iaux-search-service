import { FieldParserInterface } from '../field-parser-interface';
import { MetadataField } from '../metadata-field';

export enum PageProgression {
  RightToLeft = 'rl',
  LeftToRight = 'lr',
}

export class PageProgressionParser
  implements FieldParserInterface<PageProgression> {
  parseValue(rawValue: string): PageProgression | undefined {
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
    const parser = new PageProgressionParser();
    super(parser, rawValue);
  }
}
