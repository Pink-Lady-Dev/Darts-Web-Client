import { provideMockActions } from '@ngrx/effects/testing';
import {TestBed} from "@angular/core/testing";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {WebSocketService} from "../../services/WebSocketService/websocket.serivce";
import {GameEffects} from "./game.effects";
import {StartGameSocketAction, SuccessGetGameAction} from "../actions/game.action";
import {PlayerModel} from "../../models/Player.model";

describe('AppService', () => {
  const actions$ = new Observable();
  let effects: GameEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameEffects,provideMockActions(() => actions$)]
    });

    effects = TestBed.inject(GameEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
