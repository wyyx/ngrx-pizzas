import { Topping } from '../../models/topping.model'
import { ToppingsActions, ToppingsActionTypes } from '../actions/toppings.action'
import { arrayToEntities } from 'src/app/utils/entity.util'

export interface ToppingsState {
  entities: { [id: string]: Topping }
  loading: boolean
  loaded: boolean
}

export const initState: ToppingsState = {
  entities: {},
  loading: false,
  loaded: false
}

export function toppingsReducer(state = initState, action: ToppingsActions): ToppingsState {
  switch (action.type) {
    case ToppingsActionTypes.LOAD_TOPPINGS:
      return {
        ...state,
        loading: true
      }
    case ToppingsActionTypes.LOAD_TOPPINGS_SUCCESS:
      const entities = arrayToEntities<Topping>(action.payload)
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      }
    case ToppingsActionTypes.LOAD_TOPPINGS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      }
    case ToppingsActionTypes.TOPPINGS_LOADED:
      return {
        ...state,
        loaded: true
      }
    default:
      return state
  }
}
