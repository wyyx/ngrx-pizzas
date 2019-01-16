import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Action } from '@ngrx/store'
import { Actions, Effect, ofType } from '@ngrx/effects'
import {
  PizzasActionType,
  PizzasAction,
  LoadPizzasSuccess,
  LoadPizzasFail
} from '../actions/pizzas.action'
import { switchMap, map, catchError } from 'rxjs/operators'
import { PizzasService } from '../../services'

@Injectable()
export class PizzasEffects {
  constructor(private actions$: Actions, private pizzasService: PizzasService) {}

  @Effect()
  loadPizzas$: Observable<PizzasAction> = this.actions$.pipe(
    ofType(PizzasActionType.LOAD_PIZZAS),
    switchMap(() => this.pizzasService.getPizzas()),
    map((pizzas) => new LoadPizzasSuccess(pizzas)),
    catchError(() => of(new LoadPizzasFail()))
  )
}
