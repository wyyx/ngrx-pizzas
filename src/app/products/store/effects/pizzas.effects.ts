import { Injectable } from '@angular/core'
import { Observable, of, never } from 'rxjs'
import { Action, Store } from '@ngrx/store'
import { Actions, Effect, ofType } from '@ngrx/effects'
import {
  PizzasActionTypes,
  PizzasActions,
  LoadPizzasSuccess,
  LoadPizzasFail,
  PizzasLoaded
} from '../actions/pizzas.action'
import { switchMap, map, catchError, switchMapTo } from 'rxjs/operators'
import { PizzasService } from '../../services'
import { AppState } from 'src/app/store/reducers'
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
    switchMapTo(this.store.select(getPizzasLoaded)),
    switchMap(
      (loaded): Observable<PizzasActions> =>
        loaded
          ? of(new PizzasLoaded())
          : this.pizzasService.getPizzas().pipe(map((pizzas) => new LoadPizzasSuccess(pizzas)))
    ),
    catchError(() => of(new LoadPizzasFail()))
  )
}
