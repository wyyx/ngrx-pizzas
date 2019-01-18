import { PizzasActions, PizzasActionTypes } from '../actions/pizzas.action'
import { Pizza } from '../../models/pizza.model'

export interface PizzasState {
  entities: { [id: string]: Pizza }
  loading: boolean
  loaded: boolean
}

export const initState: PizzasState = {
  entities: {},
  loading: false,
  loaded: false
}

export function pizzasReducer(state: PizzasState = initState, action: PizzasActions) {
  switch (action.type) {
    case PizzasActionTypes.LOAD_PIZZAS:
      return { ...state, loading: true }
    case PizzasActionTypes.LOAD_PIZZAS_SUCCESS:
      // Convert to map structure from array
      const entities = action.payload.reduce(
        (accumEntities: { [id: string]: Pizza }, pizza) => {
          return { ...accumEntities, [pizza.id]: pizza }
        },
        { ...state.entities }
      )
      return { ...state, loading: false, loaded: true, entities }
    case PizzasActionTypes.LOAD_PIZZAS_FAIL:
      return { ...state, loading: false, loaded: false }
    case PizzasActionTypes.PIZZAS_LOADED:
      return { ...state, loaded: true }
    default:
      return state
  }
}
