import * as Types from 'types';
import { TransactionSearch } from '../TransactionSearch';

export type ResTransactionsItems = Types.HttpListResponse<
  'items',
  TransactionSearch
>;
