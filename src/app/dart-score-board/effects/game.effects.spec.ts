import { provideMockActions } from '@ngrx/effects/testing';
import {TestBed} from "@angular/core/testing";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import { cold, hot } from 'jasmine-marbles';
import {WebSocketService} from "../../services/WebSocketService/websocket.serivce";
import {GameEffects} from "./game.effects";
import {StartGameSocketAction, SuccessGetGameAction} from "../actions/game.action";
import {PlayerModel} from "../../models/Player.model";

describe('AppService', () => {
  const actions$ = new Observable();
  let effects: GameEffects;
  let webSocketService: WebSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameEffects,
        provideMockActions(() => actions$),
        {
          provide: webSocketService,
          useValue: {
            getTodos:jest.fn()
          }
        }
      ]
    });

    effects = TestBed.inject(GameEffects);
    // webSocketService = TestBed.inject(WebSocketService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should return a stream with todo list loaded action', () => {
    const todoList: PlayerModel[] = [new PlayerModel("Jake", 301, [])];

    const outcome = [new PlayerModel("Jake", 301, [])];

    const actions = hot('-a', { a: StartGameSocketAction({payload:0}) });
    const response = cold(' -a|', { a: todoList });
    webSocketService.socketMessage$ = of(response);

    const expected = cold('--b', { b: outcome });
    // expect(e).toBeObservable(expected);
  });
});
