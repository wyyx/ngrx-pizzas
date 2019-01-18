import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { Observable, of } from 'rxjs'
import { catchError, map, mergeMap, mergeMapTo } from 'rxjs/operators'
import { AppState } from 'src/app/store/reducers'
import { PizzasService } from '../../services'
import {
  LoadPizzasFail,
  LoadPizzasSuccess,
  PizzasActions,
  PizzasActionTypes,
  PizzasLoaded
} from '../actions/pizzas.action'
import { getPizzasLoaded } from '../selectors/pizzas.selectors'

@Injectable()
export class PizzasEffects {
  constructor(
    private actions$: Actions,
    private pizzasService: PizzasService,
    private store: Store<AppState>
  ) {}

  @Effect()
  loadPizzas$: Observable<PizzasActions> = this.actions$.pipe(
    ofType(PizzasActionTypes.LOAD_PIZZAS),
    mergeMapTo(this.store.select(getPizzasLoaded)),
    mergeMap(
      (loaded): Observable<PizzasActions> =>
        loaded
          ? of(new PizzasLoaded())
          : this.pizzasService.getPizzas().pipe(map((pizzas) => new LoadPizzasSuccess(pizzas)))
    ),
    catchError(() => of(new LoadPizzasFail()))
  )
}
