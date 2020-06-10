import {DartNotificationModel} from "./DartNotification.model";

export class DartDisplayModel {
  id:string;
  points:number;
  pie:number;
  color: string;

  constructor(dart: DartNotificationModel, color: string) {
    this.id = dart.id;
    this.points = dart.points;
    this.pie = dart.pie;
    this.color = color;
  }
}
