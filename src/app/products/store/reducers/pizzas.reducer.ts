import { PizzasAction, PizzasActionType } from '../actions/pizzas.action'
import { Pizza } from '../../models/pizza.model'

export interface PizzasState {
	data: Pizza[]
	loading: boolean
	loaded: boolean
}

export const initState: PizzasState = {
	data: [],
	loading: false,
	loaded: false
}

export function pizzasReducer(state: PizzasState = initState, action: PizzasAction) {
	switch (action.type) {
		case PizzasActionType.LOAD_PIZZAS:
			return { ...state, loading: true }
		case PizzasActionType.LOAD_PIZZAS_SUCCESS:
			const data = action.payload
			return { ...state, loading: false, loaded: true, data }
		case PizzasActionType.LOAD_PIZZAS_FAIL:
			return { ...state, loading: false, loaded: false }
		default:
			return state
	}
}
