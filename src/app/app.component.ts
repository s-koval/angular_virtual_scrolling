import { ChangeDetectionStrategy, Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from './services/http.service';
import { selectTransactionsFeature } from './store/transactions/transactions.selector';
import { Transaction } from './enums/transaction';
import { transactionStatus } from './enums/transactionStatus';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@HostListener('window:scroll', ['$event'])

export class AppComponent implements OnInit {
  transactions$: Observable<Transaction[]>;
  faHistory = faHistory;
  descriptions = [
    'Type',
    'Amount XTZ ( USD )',
    '',
    'Date',
    'Address'
  ];
  statusColor = transactionStatus;
  loading = this.httpService.loading;

  constructor(
    private store$: Store<string[][]>,
    private httpService: HttpService
  ) {
    this.transactions$ = store$.pipe(select(selectTransactionsFeature));
  }

  onScroll(event): void {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.httpService.getData();
    }
  }

  reset(): void {
    this.httpService.flushData();
  }

  ngOnInit(): void {

  }
}
