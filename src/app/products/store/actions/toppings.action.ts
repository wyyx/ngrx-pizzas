import { Action } from '@ngrx/store'
import { Topping } from '../../models/topping.model'

// load pizzas
export enum ToppingsActionTypes {
  LOAD_TOPPINGS = '[Products] Load Toppings',
  LOAD_TOPPINGS_FAIL = '[Products] Load Toppings Fail',
  LOAD_TOPPINGS_SUCCESS = '[Products] Load Toppings Success',
  TOPPINGS_LOADED = '[Products] Load Toppings Loaded'
}

export class LoadToppings implements Action {
  readonly type = ToppingsActionTypes.LOAD_TOPPINGS
}

export class LoadToppingsFail implements Action {
  readonly type = ToppingsActionTypes.LOAD_TOPPINGS_FAIL
  constructor() {}
}

export class LoadToppingsSuccess implements Action {
  readonly type = ToppingsActionTypes.LOAD_TOPPINGS_SUCCESS
  constructor(public payload: Topping[]) {}
}

export class ToppingsLoaded implements Action {
  readonly type = ToppingsActionTypes.TOPPINGS_LOADED
  constructor() {}
}

// action types
export type ToppingsActions = LoadToppings | LoadToppingsFail | LoadToppingsSuccess | ToppingsLoaded
