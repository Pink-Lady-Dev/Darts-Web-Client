import { Component, OnInit } from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {PlayerModel} from "../../../models/Player.model";
import GameState from "../../actions/game.state";
import {select, Store} from "@ngrx/store";
import { StartGameSocketAction} from "../../actions/game.action";

@Component({
  selector: 'app-dart-score-board-page',
  templateUrl: './dart-score-board-page.component.html',
  styleUrls: ['./dart-score-board-page.component.css']
})
export class DartScoreBoardPageComponent implements OnInit {

  public gameCode : number;
  public players : PlayerModel[];

  game$: Observable<GameState>;

  constructor(private store: Store<{ game: GameState }>) {
    // THis is probably gonna need to be replaced by actual selectors
    this.game$ = store.pipe(select('game'));
  }

  ngOnInit(): void {

    this.gameCode = Math.floor(Math.random() * Math.floor(10000));

    this.store.dispatch(StartGameSocketAction({payload:this.gameCode}));
    let players : PlayerModel[];

    this.game$.subscribe(x =>
    {
      this.players = x.game;
    })
    // TODO make selectors

    //this.gameInitiated = true -> if > 0 players
    // let stompClient = this.webSocketService.connect();
    // stompClient.connect({}, frame => {
    //
    //   stompClient.subscribe('/topic/notification/' + this.gameCode, notifications => {
    //
    //     let jsonBody = JSON.parse(notifications.body);
    //
    //     console.log(jsonBody.identifier)
    //     if (jsonBody.identifier == "GAME_META"){
    //
    //       let playerModels = jsonBody.players.map(x => new PlayerModel(
    //         x.username,
    //         x.score.score,
    //         x.darts.map(jsonBody => new DartNotificationModel(jsonBody.id, jsonBody.throwNumber, jsonBody.points, jsonBody.pie, jsonBody.isDouble, jsonBody.isTriple)))
    //       );
    //
    //       this.gameInitiated = true
    //       this.players = playerModels;
    //
    //     } else if (jsonBody.identifier == "DART"){
    //
    //       this.players.filter(x => x.name == jsonBody.username).forEach(p => {
    //         p.score = jsonBody.score
    //         p.darts.push(new DartNotificationModel(jsonBody.id, jsonBody.throwNumber, jsonBody.points, jsonBody.pie, jsonBody.isDouble, jsonBody.isTriple))
    //       })
    //     }
    //   })
    // });
  }

}
