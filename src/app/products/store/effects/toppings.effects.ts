import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { Observable, of } from 'rxjs'
import { catchError, map, mergeMap, mergeMapTo } from 'rxjs/operators'
import { AppState } from 'src/app/store/reducers'
import { ToppingsService } from '../../services'
import {
  LoadToppingsFail,
  LoadToppingsSuccess,
  ToppingsActions,
  ToppingsActionTypes,
  ToppingsLoaded
} from '../actions/toppings.action'
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
    mergeMapTo(this.store.select(getToppingsLoaded)),
    mergeMap(
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
