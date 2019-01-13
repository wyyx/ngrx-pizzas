import { Action } from '@ngrx/store'

import { Pizza } from '../../models/pizza.model'

// load pizzas
export enum PizzasActionType {
	LOAD_PIZZAS = '[Products] Load Pizzas',
	LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail',
	LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success'
}

export class LoadPizzas implements Action {
	readonly type = PizzasActionType.LOAD_PIZZAS
	name = 'houdini'
}

export class LoadPizzasFail implements Action {
	readonly type = PizzasActionType.LOAD_PIZZAS_FAIL
	constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
	readonly type = PizzasActionType.LOAD_PIZZAS_SUCCESS
	constructor(public payload: Pizza[]) {}
}

// action types
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess
