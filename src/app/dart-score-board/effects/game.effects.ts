import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  ErrorGameAction,
  StartGameSocketAction,
  SuccessGetDartAction,
  SuccessGetGameAction
} from "../actions/game.action";
import {catchError, map, mergeMap} from "rxjs/operators";
import {PlayerModel} from "../../models/Player.model";
import {DartNotificationModel} from "../../models/DartNotification.model";
import {HttpClient} from "@angular/common/http";
import {WebSocketService} from "../../services/WebSocketService/websocket.serivce";


@Injectable()
export class GameEffects {
  // private getSamplePlayerArray = [new PlayerModel("ajek", 31, [new DartNotificationModel("1",0,1,1,false,false)])];


  constructor(private action$: Actions) {
    console.log("Shit")
  }


  GetGame$: Observable<Action> = createEffect(() =>
      this.action$.pipe(
        ofType(StartGameSocketAction),
        mergeMap((action) => {
          let webSocketService = new WebSocketService(action.payload.toString());
          return webSocketService.socketMessage$.pipe(
            map((data: any) => {
              let jsonBody = JSON.parse(data.body);
              if (jsonBody.identifier === "GAME_META"){
                return SuccessGetGameAction({payload: mapToPlayerModelArray(jsonBody)});
              } else if (jsonBody.identifier === "DART"){
                return SuccessGetDartAction({payload: mapToDartNotificationModel(jsonBody)});
              }
            }),
            catchError((error: Error) => {
              return of(ErrorGameAction(error));
            })
          )
        })
      )
  );

  // May not be needed for just setting ... that's handled in reducer
  // TODO SuccessGetGameAction -> Set vars
  // TODO SuccessDartAction -> set var

  // TODO ErrorGameAction

}

function mapToPlayerModelArray (json : any) : PlayerModel[]{
  return json.players.map(x => {
    return new PlayerModel(
        x.username,
        x.score.score,
        x.darts.map(jsonBody => new DartNotificationModel(x.username,jsonBody.id, jsonBody.throwNumber, jsonBody.points, jsonBody.pie, jsonBody.isDouble, jsonBody.isTriple, x.score.score)))
    }
  );
}

function mapToDartNotificationModel (json : any) : DartNotificationModel{
  return new DartNotificationModel(json.username, json.id, json.throwNumber, json.points, json.pie, json.double, json.triple, json.score)
}
