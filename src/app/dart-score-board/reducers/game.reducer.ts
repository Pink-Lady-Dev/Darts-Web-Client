import GameState, {getInitialState} from "../actions/game.state";
import {Action, createReducer, on} from "@ngrx/store";
import {StartGameSocketAction, SuccessGetDartAction, SuccessGetGameAction} from "../actions/game.action";
import {PlayerModel} from "../../models/Player.model";

export const initialState = getInitialState();

const reducer = createReducer(
  initialState,
  on(StartGameSocketAction, state => state),
  on(SuccessGetGameAction, (state: GameState, { payload }) => {
    return { ...state, game: payload};
  }),
  on(SuccessGetDartAction, (state: GameState, { payload }) => {

    const players : PlayerModel[] = state.game;
    const index = players.map(player => player.name).indexOf(payload.username);
    const player = players[index];

    const newPlayer = new PlayerModel(player.name, payload.score, player.darts.concat(payload));

    return {
      ...state,
      game: index > 0 ?
        state.game.slice(0, index).concat(newPlayer).concat(state.game.slice(index + 1)):
        [newPlayer].concat(state.game.slice(index + 1))
    };
  })
  // Success Dart
  // Success Dart Remove
  // Both are gonna be dirtier and require breaking apart ie more that { ...
);

export function GameReducer(state: GameState | undefined, action: Action) {
  return reducer(state, action);
}
