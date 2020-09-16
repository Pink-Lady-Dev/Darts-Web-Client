import GameState, {getInitialState} from "../actions/game.state";
import {Action, createReducer, on} from "@ngrx/store";
import {StartGameSocketAction, SuccessGetDartAction, SuccessGetGameAction} from "../actions/game.action";
import {PlayerModel} from "../../models/Player.model";

export const initialState = getInitialState();

const reducer = createReducer(
  initialState,
  on(StartGameSocketAction, state => state),
  on(SuccessGetGameAction, (state: GameState, { payload }) => {
    console.log('--')
    console.log(state.game)
    console.log('--')
    return { ...state, game: payload};
  }),
  on(SuccessGetDartAction, (state: GameState, { payload }) => {
    console.log('%%')
    console.log(state.game)
    console.log('%%')
    const players : PlayerModel[] = state.game;
    //
    let index =players.map(player => player.name).indexOf(payload.username);
    let player = players[index];
    const newPlayer = new PlayerModel(player.name, payload.score, player.darts.concat(payload));
    //
    // console.log("in 0");
    // if (players.length > index){
    //   console.log("in 1");
    //   if (players[index] !== null){
    //     console.log(players[index].darts);
    //     console.log(payload);
    //     players[index].darts = [payload];
    //   }
    // }
    //
    // return {...state, game:players};
    // if (player !== null){
    //   player.darts.push(payload)
    // }
    // // add dart to player
    // return state;

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
