/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchResponseParams } from './search-response-params';

export interface SearchResponseHeader {
  status: number;
  QTime: number;
  params: SearchResponseParams;
}
