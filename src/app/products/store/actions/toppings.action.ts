import { Action } from '@ngrx/store'
import { Topping } from '../../models/topping.model'

// load pizzas
export enum ToppingsActionType {
  LOAD_TOPPINGS = '[Products] Load Toppings',
  LOAD_TOPPINGS_FAIL = '[Products] Load Toppings Fail',
  LOAD_TOPPINGS_SUCCESS = '[Products] Load Toppings Success'
}

export class LoadToppings implements Action {
  readonly type = ToppingsActionType.LOAD_TOPPINGS
}

export class LoadToppingsFail implements Action {
  readonly type = ToppingsActionType.LOAD_TOPPINGS_FAIL
  constructor() {}
}

export class LoadToppingsSuccess implements Action {
  readonly type = ToppingsActionType.LOAD_TOPPINGS_SUCCESS
  constructor(public payload: Topping[]) {}
}

// action types
export type ToppingsAction = LoadToppings | LoadToppingsFail | LoadToppingsSuccess
