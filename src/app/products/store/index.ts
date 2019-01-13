import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'
import {
	PizzasState,
	pizzasReducer,
	pizzasDataProjector,
	pizzasIsloadingProjector,
	pizzasLoadedProjector
} from './reducers/pizzas.reducer'

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
export const getAllPizzas = createSelector(getPizzasState, pizzasDataProjector)
export const getPizzasIsloading = createSelector(getPizzasState, pizzasIsloadingProjector)
export const getPizzasLoaded = createSelector(getPizzasState, pizzasLoadedProjector)
