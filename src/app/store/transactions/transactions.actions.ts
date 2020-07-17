import { Action } from '@ngrx/store';
import { Transaction } from '../../enums/transaction';

export enum transactionsType {
  getData = '[TRANSACTIONS] get data',
  flushData = '[TRANSACTIONS] flush data'
}

export class GetTransactionsData implements Action {
  readonly type = transactionsType.getData;
  constructor(public payload: Transaction[]) { }
}

export class FlushData implements Action {
  readonly type = transactionsType.flushData;
}

export type transactionsActions = GetTransactionsData | FlushData;
