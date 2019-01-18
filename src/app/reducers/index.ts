import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromRouter from '@ngrx/router-store';

export interface State {
  router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State, any> = {
  router: fromRouter.routerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [] // weird console output when can load guard is called
  : [];

const getRouterState = createFeatureSelector<
  State,
  fromRouter.RouterReducerState
>('router');

export const selectCurrentRoute = createSelector(
  getRouterState,
  (router: fromRouter.RouterReducerState) => {
    return router && router.state.url; // initial state is null so make sure it exists
  }
);
