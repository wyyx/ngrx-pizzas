import { Injectable } from '@angular/core'
import { Effect, ofType, Actions } from '@ngrx/effects'
import { Observable, of } from 'rxjs'
import { Action } from 'rxjs/internal/scheduler/Action'
import { mergeMap, map, catchError, switchMap, switchMapTo } from 'rxjs/operators'
import { HttpClient } from 'selenium-webdriver/http'
import {
  ToppingsActions,
  ToppingsActionTypes,
  LoadToppingsSuccess,
  LoadToppingsFail,
  ToppingsLoaded
} from '../actions/toppings.action'
import { ToppingsService } from '../../services'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/store/reducers'
import { getToppingsLoaded } from '../selectors/toppings.selectors'

@Injectable()
export class ToppingsEffects {
  constructor(
    private toppingsService: ToppingsService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}

  @Effect()
  loadToppings$: Observable<ToppingsActions> = this.actions$.pipe(
    ofType(ToppingsActionTypes.LOAD_TOPPINGS),
    switchMapTo(this.store.select(getToppingsLoaded)),
    switchMap(
      (loaded): Observable<ToppingsActions> =>
        loaded
          ? of(new ToppingsLoaded())
          : this.toppingsService
              .getToppings()
              .pipe(map((toppings) => new LoadToppingsSuccess(toppings)))
    ),
    catchError(() => of(new LoadToppingsFail()))
  )
}
