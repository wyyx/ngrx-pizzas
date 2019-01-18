import { createSelector } from '@ngrx/store'
import { getProductsState, ProductsState } from '..'
import { PizzasState } from '../reducers/pizzas.reducer'
import { getRouterState } from 'src/app/store/reducers'

export const getPizzasState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
)

export const getPizzasEntities = createSelector(
  getPizzasState,
  (state: PizzasState) => state.entities
)

export const getAllPizzas = createSelector(
  getPizzasState,
  (state) => {
    return Object.keys(state.entities).map((key) => state.entities[key])
  }
)

export const getPizzasLoading = createSelector(
  getPizzasState,
  (state: PizzasState) => state.loading
)

export const getPizzasLoaded = createSelector(
  getPizzasState,
  (state: PizzasState) => state.loaded
)

export const getCurrentPizza = createSelector(
  getPizzasEntities,
  getRouterState,
  (entities, router) => router && entities[router.state.params.pizzaId]
)
