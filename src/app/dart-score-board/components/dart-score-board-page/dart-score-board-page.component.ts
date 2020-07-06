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

    this.players = [new PlayerModel("Jake 1",30,[]),new PlayerModel("Jake 2",50,[])]

    let stompClient = this.webSocketService.connect();
    stompClient.connect({}, frame => {

      stompClient.subscribe('/topic/notification/' + this.gameCode, notifications => {

        let jsonBody = JSON.parse(notifications.body);

        console.log(jsonBody.identifier)
        if (jsonBody.identifier == "GAME_META"){

          let playerModels = jsonBody.players.map(x => new PlayerModel(
              x.name,
              x.score.score,
              x.darts.map(jsonBody => new DartNotificationModel(jsonBody.id, jsonBody.throwNumber, jsonBody.points, jsonBody.pie, jsonBody.isDouble, jsonBody.isTriple)))
          );

          this.gameInitiated = true
          this.players = playerModels;

        } else {

          this.players.filter(x => x.name == jsonBody.username).forEach(p => {
            p.score = jsonBody.score
            p.darts.push(new DartNotificationModel(jsonBody.id, jsonBody.throwNumber, jsonBody.points, jsonBody.pie, jsonBody.isDouble, jsonBody.isTriple))
          })
        }
      })
    });
  }

}
