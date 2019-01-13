import { PizzasAction, PizzasActionType } from '../actions/pizzas.action'
import { Pizza } from '../../models/pizza.model'

export interface PizzasState {
	data: Pizza[]
	isLoading: boolean
	loaded: boolean
}

export const initState: PizzasState = {
	data: [
		{
			name: "Blazin' Inferno",
			toppings: [
				{
					id: 10,
					name: 'pepperoni'
				},
				{
					id: 9,
					name: 'pepper'
				},
				{
					id: 3,
					name: 'basil'
				},
				{
					id: 4,
					name: 'chili'
				},
				{
					id: 7,
					name: 'olive'
				},
				{
					id: 2,
					name: 'bacon'
				}
			],
			id: 1
		}
	],
	isLoading: false,
	loaded: false
}

export function pizzasReducer(state: PizzasState = initState, action: PizzasAction) {
	switch (action.type) {
		case PizzasActionType.LOAD_PIZZAS:
			return { ...state, loading: true }
		case PizzasActionType.LOAD_PIZZAS_SUCCESS:
			return { ...state, loading: false, loaded: true }
		case PizzasActionType.LOAD_PIZZAS_FAIL:
			return { ...state, loading: false, loaded: false }
		default:
			return state
	}
}

// Create projectors
export const pizzasDataProjector = (state: PizzasState) => state.data
export const pizzasIsloadingProjector = (state: PizzasState) => state.isLoading
export const pizzasLoadedProjector = (state: PizzasState) => state.loaded
