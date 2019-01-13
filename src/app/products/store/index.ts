import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'
import { PizzasState, pizzasReducer } from './reducers/pizzas.reducer'

export interface ProductsState {
	pizzas: PizzasState
}

export const productsReducers: ActionReducerMap<ProductsState> = {
	pizzas: pizzasReducer
}

// Create selectors
export const getProductsState = createFeatureSelector<ProductsState>('products')
export const getPizzasState = createSelector(
	getProductsState,
	(state: ProductsState) => state.pizzas
)

export const getAllPizzas = createSelector(getPizzasState, (state: PizzasState) => state.data)
export const getPizzasIsloading = createSelector(
	getPizzasState,
	(state: PizzasState) => state.loading
)
export const getPizzasLoaded = createSelector(getPizzasState, (state: PizzasState) => state.loaded)
