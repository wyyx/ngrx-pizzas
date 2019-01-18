import { PizzasActions, PizzasActionTypes } from '../actions/pizzas.action'
import { Pizza } from '../../models/pizza.model'
import { arrayToEntities } from 'src/app/utils/entity.util'

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
      const entities = arrayToEntities<Pizza>(action.payload)
      return { ...state, loading: false, loaded: true, entities }
    case PizzasActionTypes.LOAD_PIZZAS_FAIL:
      return { ...state, loading: false, loaded: false }
    case PizzasActionTypes.PIZZAS_LOADED:
      return { ...state, loaded: true }
    default:
      return state
  }
}
