import {PlayerModel} from "../../models/Player.model";

export default class GameState {
  game: Array<PlayerModel>;
  gameError: Error;
}

export const getInitialState = (): GameState => {
  return { game: Array<PlayerModel>(), gameError: null };
};
