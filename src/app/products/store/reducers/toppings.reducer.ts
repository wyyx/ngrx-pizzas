import { Topping } from '../../models/topping.model'
import { ToppingsAction, ToppingsActionType } from '../actions/toppings.action'

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

export function toppingsReducer(state = initState, action: ToppingsAction): ToppingsState {
  switch (action.type) {
    case ToppingsActionType.LOAD_TOPPINGS:
      return {
        ...state,
        loading: true
      }
    case ToppingsActionType.LOAD_TOPPINGS_SUCCESS:
      const entities = action.payload.reduce((accumToppings, topping) => {
        return { ...accumToppings, [topping.id]: topping }
      }, {})

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      }
    case ToppingsActionType.LOAD_TOPPINGS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      }
    default:
      return state
  }
}
