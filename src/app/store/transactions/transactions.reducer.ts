import { transactionsActions, transactionsType } from './transactions.actions';
import { Transaction } from '../../enums/transaction';

export const transactionsNode = 'transactions';

const initialState = [];

export const transactionReducer = (state: Transaction[] = initialState, action: transactionsActions) => {
  switch (action.type) {
    case transactionsType.getData:
      return [...state, ...action.payload];
    case transactionsType.flushData:
      return [];
    default:
      return state;
  }
};
