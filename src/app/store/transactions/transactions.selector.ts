import { createFeatureSelector } from '@ngrx/store';
import { transactionsNode } from './transactions.reducer';
import { Transaction } from '../../enums/transaction';
export const selectTransactionsFeature = createFeatureSelector<Transaction[]>(transactionsNode);
