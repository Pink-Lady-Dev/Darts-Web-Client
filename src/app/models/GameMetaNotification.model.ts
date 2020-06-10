import {PlayerModel} from "./Player.model";

export class GameMetaNotificationModel {
  players: PlayerModel[]
  gameType: string

  constructor(players: PlayerModel[], gameType: string) {
    this.players = players;
    this.gameType = gameType;
  }
}
