import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'
import { PizzasState, pizzasReducer } from './reducers/pizzas.reducer'
import { state } from '@angular/animations'
import { ToppingsState, toppingsReducer } from './reducers/toppings.reducer'

export interface ProductsState {
  pizzas: PizzasState
  toppings: ToppingsState
}

export const productsReducers: ActionReducerMap<ProductsState> = {
  pizzas: pizzasReducer,
  toppings: toppingsReducer
}

// Create products state feature selector
export const getProductsState = createFeatureSelector<ProductsState>('products')
