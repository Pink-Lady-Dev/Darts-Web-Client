import {createAction, props} from "@ngrx/store";
import {PlayerModel} from "../../models/Player.model";
import {DartNotificationModel} from "../../models/DartNotification.model";

export const StartGameSocketAction = createAction(
  '[Game] - Get Game',
  props<{ payload: number }>());

export const SuccessGetGameAction = createAction(
  '[Game] - Success Get Game',
  props<{ payload: PlayerModel[] }>()
);

export const SuccessGetDartAction = createAction(
  '[Game] - Success Get Dart',
  props<{ payload: DartNotificationModel }>()
);

export const SuccessRemoveDartAction = createAction(
  '[Game] - Success Get Game',
  props<{ payload: String }>()
);

export const ErrorGameAction = createAction('[Game] - Error', props<Error>());
