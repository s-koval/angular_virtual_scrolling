import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { GetTransactionsData, FlushData } from '../store/transactions/transactions.actions';
import { Transaction } from '../enums/transaction';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public toUsdExchangeRate = null;
  public loading = false;
  private lastBottomId = undefined;

  constructor(
    private http: HttpClient,
    private store$: Store<string[][]>
  ) {
    this.getExchangeRate();
  }

  getExchangeRate(): void {
    console.log('getExchangeRate');
    const url = 'https://api.coinlore.net/api/ticker/?id=3682';
    this.http.get(url).subscribe(data => {
      this.toUsdExchangeRate = data[0].price_usd;
      console.log(this.toUsdExchangeRate);
      this.getData();
    });
  }

  getData(): void {
    let url = 'https://api.tzstats.com/tables/op?' +
      'columns=type,volume,row_id,time,sender' +
      '&receiver=tz1gfArv665EUkSg2ojMBzcbfwuPxAvqPvjo' +
      '&limit=10&order=desc';

    if ( this.lastBottomId ) {
      url = `${url}&cursor.lte=${this.lastBottomId}`;
    }

    this.loading = true;
    this.http.get(url).subscribe((response: string[][]) => {
      const pull = response.map((element: any): Transaction => {
        return {
          type: element[0],
          amountXTZ: element[1],
          amountUSD: element[1] * this.toUsdExchangeRate,
          row_id: element[2],
          date: element[3],
          address: element[4],
        };
      });

      this.lastBottomId = pull[9].row_id;
      this.store$.dispatch(new GetTransactionsData(pull));
      this.loading = false;
    });
  }

  flushData(): void {
    this.lastBottomId = undefined;
    this.store$.dispatch(new FlushData());
    this.getData();
  }
}
