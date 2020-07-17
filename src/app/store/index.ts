import { ActionReducerMap } from '@ngrx/store';
import { transactionReducer, transactionsNode} from './transactions/transactions.reducer';
import { Transaction } from '../enums/transaction';

export interface State {
  [transactionsNode]: Transaction[];
}

export const reducers: ActionReducerMap<State> = {
  [transactionsNode]: transactionReducer
};
