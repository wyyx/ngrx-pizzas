import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'
import { routerReducer, RouterReducerState } from '@ngrx/router-store'
import { RouterStateUrl } from './custom-route-serializer'

export interface State {
  router: RouterReducerState<RouterStateUrl>
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
}

// Create router state feature selector
export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router')
