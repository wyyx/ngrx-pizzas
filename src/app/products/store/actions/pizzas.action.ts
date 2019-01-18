import { Action } from '@ngrx/store'

import { Pizza } from '../../models/pizza.model'

// load pizzas
export enum PizzasActionTypes {
  LOAD_PIZZAS = '[Products] Load Pizzas',
  LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail',
  LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success',
  PIZZAS_LOADED = '[Products] Load Pizzas Loaded'
}

export class LoadPizzas implements Action {
  readonly type = PizzasActionTypes.LOAD_PIZZAS
}

export class LoadPizzasFail implements Action {
  readonly type = PizzasActionTypes.LOAD_PIZZAS_FAIL
  constructor() {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = PizzasActionTypes.LOAD_PIZZAS_SUCCESS
  constructor(public payload: Pizza[]) {}
}

export class PizzasLoaded implements Action {
  readonly type = PizzasActionTypes.PIZZAS_LOADED
  constructor() {}
}

// action types
export type PizzasActions = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess | PizzasLoaded
