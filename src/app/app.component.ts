import { Component } from '@angular/core';
import {WebSocketService} from "./services/WebSocketService/websocket.serivce";
import {DartNotificationModel} from "./models/DartNotification.model";
import {GameMetaNotificationModel} from "./models/GameMetaNotification.model";
import {Observable, Subject} from "rxjs";
import {PlayerModel} from "./models/Player.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Darts-Web-Client';

  public darts : DartNotificationModel[] = []
  public gameMeta : GameMetaNotificationModel
  public size: number
  public playerSize: number

  constructor() {}
}
