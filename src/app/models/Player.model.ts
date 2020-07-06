import {DartNotificationModel} from "./DartNotification.model";

export class PlayerModel {
  name: string
  score: number
  darts: DartNotificationModel[]

  constructor(name: string, score: number, darts: DartNotificationModel[]) {
    this.name = name;
    this.score = score;
    this.darts = darts;
  }

}
