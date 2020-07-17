import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { StoreModule} from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientModule } from '@angular/common/http';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule, HttpClientModule],
      providers: [
        provideMockStore({ initialState: [] }),
        HttpService,
      ]
    }).compileComponents();
    service = TestBed.inject(HttpService);
  });

  it('HttpService should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Check for HttpService methods existence', () => {
    it('getData method should exist', () => {
      expect(typeof service.getData).toBe('function');
    });

    it('getExchangeRate method should exist', () => {
      expect(typeof service.getExchangeRate).toBe('function');
    });

    it('flushData method should exist', () => {
      expect(typeof service.flushData).toBe('function');
    });
  });
});
