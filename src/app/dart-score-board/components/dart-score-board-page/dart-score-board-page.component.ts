import { Component, OnInit } from '@angular/core';
import {GameMetaNotificationModel} from "../../../models/GameMetaNotification.model";
import {Observable, of, Subject} from "rxjs";
import {PlayerModel} from "../../../models/Player.model";
import {DartNotificationModel} from "../../../models/DartNotification.model";
import {WebSocketService} from "../../../services/WebSocketService/websocket.serivce";

@Component({
  selector: 'app-dart-score-board-page',
  templateUrl: './dart-score-board-page.component.html',
  styleUrls: ['./dart-score-board-page.component.css']
})
export class DartScoreBoardPageComponent implements OnInit {

  public gameInitiated : boolean = false

  public gameCode : number;
  public players : PlayerModel[];

  constructor(private webSocketService: WebSocketService) { }

  ngOnInit(): void {

    this.gameCode = Math.floor(Math.random() * Math.floor(10000));

    this.players = [new PlayerModel("Jake 1"),new PlayerModel("Jake 2")]

    let stompClient = this.webSocketService.connect();
    stompClient.connect({}, frame => {

      stompClient.subscribe('/topic/notification/' + this.gameCode, notifications => {

        let jsonBody = JSON.parse(notifications.body);

        console.log(jsonBody.identifier)
        if (jsonBody.identifier == "GAME_META"){
          console.log("Game")
          let playerModels = jsonBody.playerUserNames.map(x => (new PlayerModel(x)));
          let tempGameMeta = new GameMetaNotificationModel(playerModels, jsonBody.gameType);

          this.gameInitiated = true

          this.players = playerModels;
          console.log(playerModels)
          // this.$gameMetaNotification = of(tempGameMeta);
        } else {


          console.log("Dart")
          let d = new DartNotificationModel(jsonBody.id, jsonBody.throwNumber, jsonBody.points, jsonBody.pie, jsonBody.isDouble, jsonBody.isTriple)
          // this.darts.push(d)
          console.log("Username" + jsonBody.username)
          for (let i = 0; i < this.players.length; i++){

            if (this.players[i].name == jsonBody.username){
              console.log("New Score" + jsonBody.score)
              this.players[i].score = jsonBody.score
              this.players[i].darts.push(d)
            }

          }
        }

      })

    });
  }

}
