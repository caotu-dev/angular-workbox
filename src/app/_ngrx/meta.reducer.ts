import { ActionReducer, MetaReducer } from "@ngrx/store";

export function debugReducer(reducer : ActionReducer<any>) : ActionReducer<any> {
  return function(state, action) {
    console.log(state);
    console.log(action);

    return reducer(state, action)
  }
}

export const metaReducers : MetaReducer<any>[] = [debugReducer]
