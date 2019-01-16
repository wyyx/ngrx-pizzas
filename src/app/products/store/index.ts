import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'
import { PizzasState, pizzasReducer } from './reducers/pizzas.reducer'
import { state } from '@angular/animations'

export interface ProductsState {
  pizzas: PizzasState
}

export const productsReducers: ActionReducerMap<ProductsState> = {
  pizzas: pizzasReducer
}

// Create products state feature selector
export const getProductsState = createFeatureSelector<ProductsState>('products')
