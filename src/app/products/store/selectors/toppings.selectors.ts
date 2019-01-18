import { createSelector } from '@ngrx/store'
import { getProductsState } from '..'
import { state } from '@angular/animations'
export const getToppingsState = createSelector(
  getProductsState,
  (state) => state.toppings
)

export const getToppingEntities = createSelector(
  getToppingsState,
  (state) => state.entities
)

export const getAllToppings = createSelector(
  getToppingsState,
  (state) => Object.keys(state.entities).map((id) => state.entities[id])
)

export const getToppingsLoaded = createSelector(
  getToppingsState,
  (state) => state.loaded
)
