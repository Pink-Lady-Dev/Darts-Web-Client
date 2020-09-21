import {GameReducer as reducer} from "./game.reducer";
import {PlayerModel} from "../../models/Player.model";
import {SuccessGetDartAction, SuccessGetGameAction} from "../actions/game.action";
import {getInitialState} from "../actions/game.state";
import {DartNotificationModel} from "../../models/DartNotification.model";

describe('Reducer: Game', () => {
  it('should have initial state of new PlayerModel array', () => {
    const expected = { game: Array<PlayerModel>(), gameError: null }
    const action = { type: 'foo' } as any;
    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should have state of with PlayerModels after SuccessGetGameAction', () => {
    const PlayerModels = [ new PlayerModel("Jake", 301, [])]

    const expected = { game: PlayerModels, gameError: null }
    const action = SuccessGetGameAction({payload:PlayerModels});

    expect(reducer(getInitialState(), action)).toEqual(expected);
  });

  it('should have state of with PlayerModels after SuccessGetDartAction', () => {

    const dart = new DartNotificationModel("Jake", '21312', 0, 5, 5, false, false, 296);

    const expected = { game: [ new PlayerModel("Jake", 296, [dart])], gameError: null }
    const action = SuccessGetDartAction({payload: dart});

    expect(reducer({game:[ new PlayerModel("Jake", 301, [])], gameError:null}, action)).toEqual(expected);
  });
});
