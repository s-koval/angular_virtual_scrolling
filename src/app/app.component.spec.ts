import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        AppComponent
      ],
      providers: [
        provideMockStore({ initialState: { }}),
        HttpClient
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('Check for AppComponent methods existence', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    it('onScroll method should exist', () => {
      expect(typeof app.onScroll).toBe('function');
    });

    it('reset method should exist', () => {
      expect(typeof app.onScroll).toBe('function');
    });
  });
});
