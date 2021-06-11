import { Component } from '@angular/core';
import {DartNotificationModel} from "./models/DartNotification.model";
import {GameMetaNotificationModel} from "./models/GameMetaNotification.model";
import {Observable, Subject} from "rxjs";
import {PlayerModel} from "./models/Player.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Darts-Web-Client';

  public darts : DartNotificationModel[] = []
  public gameMeta : GameMetaNotificationModel
  public size: number
  public playerSize: number

  constructor() {

    // stompClient.connect({}, frame => {

      // stompClient.subscribe('/topic/notification/stop', notifications => {
      //
      //   let jsonBody = JSON.parse(notifications.body);
      //   console.log(jsonBody.identifier)
      //   if (jsonBody.identifier == "GAME_META"){
      //     console.log("Game")
      //     let playerModels = jsonBody.playerUserNames.map(x => (new PlayerModel(x)));
      //     this.gameMeta = new GameMetaNotificationModel(playerModels, jsonBody.gameType);
      //
      //     this.playerSize = this.gameMeta.players.length;
      //     this.size = 100 / this.playerSize;
      //   } else {
      //     console.log("Dart")
      //     let d = new DartNotificationModel(jsonBody.id, jsonBody.throwNumber, jsonBody.points, jsonBody.pie, jsonBody.isDouble, jsonBody.isTriple)
      //     this.darts.push(d)
      //     console.log("Username" + jsonBody.username)
      //     for (let i = 0; i < this.gameMeta.players.length; i++){
      //
      //       if (this.gameMeta.players[i].name == jsonBody.username){
      //         console.log("New Score" + jsonBody.score)
      //         this.gameMeta.players[i].score = jsonBody.score
      //       }
      //
      //     }
      //   }
      //
      // })

    // });
  }
}
