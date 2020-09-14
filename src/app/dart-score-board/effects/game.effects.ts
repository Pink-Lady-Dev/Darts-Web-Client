import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ErrorGameAction, GetGameAction, SuccessGetGameAction} from "../actions/game.action";
import {catchError, map, mergeMap} from "rxjs/operators";
import {PlayerModel} from "../../models/Player.model";
import {DartNotificationModel} from "../../models/DartNotification.model";
import {HttpClient} from "@angular/common/http";
import {WebSocketService} from "../../services/WebSocketService/websocket.serivce";


@Injectable()
export class GameEffects {
  private getSamplePlayerArray = [new PlayerModel("ajek", 31, [new DartNotificationModel("1",0,1,1,false,false)])];


  constructor(private webSocketService: WebSocketService, private action$: Actions) {

  }


  GetGame$: Observable<Action> = createEffect(() => {
      return this.action$.pipe(
        ofType(GetGameAction),
        mergeMap(() => {
          this.webSocketService = new WebSocketService('6969');
          return this.webSocketService.socketMessage$.pipe(
            map((data: any) => {
              let jsonBody = JSON.parse(data.body);
              return SuccessGetGameAction({payload: mapToPlayerModelArray(jsonBody)});
            }),
            catchError((error: Error) => {
              return of(ErrorGameAction(error));
            })
          )
        })
      );
    }
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
        x.darts.map(jsonBody => new DartNotificationModel(jsonBody.id, jsonBody.throwNumber, jsonBody.points, jsonBody.pie, jsonBody.isDouble, jsonBody.isTriple)))
    }
  );
}
