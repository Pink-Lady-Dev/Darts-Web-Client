import GameState, {getInitialState} from "../actions/game.state";
import {Action, createReducer, on} from "@ngrx/store";
import {GetGameAction, SuccessGetGameAction} from "../actions/game.action";
import {PlayerModel} from "../../models/Player.model";

export const initialState = getInitialState();

const reducer = createReducer(
  initialState,
  on(GetGameAction, state => state),
  on(SuccessGetGameAction, (state: GameState, { payload }) => {
    return { ...state, game: payload};
  })
  // Success Dart
  // Success Dart Remove
  // Both are gonna be dirtier and require breaking apart ie more that { ...
);

export function GameReducer(state: GameState | undefined, action: Action) {
  return reducer(state, action);
}
