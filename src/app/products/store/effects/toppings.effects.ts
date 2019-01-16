import { Injectable } from '@angular/core'
import { Effect, ofType, Actions } from '@ngrx/effects'
import { Observable, of } from 'rxjs'
import { Action } from 'rxjs/internal/scheduler/Action'
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators'
import { HttpClient } from 'selenium-webdriver/http'
import {
  ToppingsAction,
  ToppingsActionType,
  LoadToppingsSuccess,
  LoadToppingsFail
} from '../actions/toppings.action'
import { ToppingsService } from '../../services'

@Injectable()
export class ToppingsEffects {
  constructor(private toppingsService: ToppingsService, private actions$: Actions) {}

  @Effect()
  loadToppings$: Observable<ToppingsAction> = this.actions$.pipe(
    ofType(ToppingsActionType.LOAD_TOPPINGS),
    switchMap(() => this.toppingsService.getToppings()),
    map((toppings) => new LoadToppingsSuccess(toppings)),
    catchError(() => of(new LoadToppingsFail()))
  )
}
