import {DartNotificationModel} from "./DartNotification.model";

export class PlayerModel {
  name: string
  score: number
  darts: DartNotificationModel[]

  constructor(name: string) {
    this.name = name;
    this.score = 301;
    this.darts = [];
  }
}
