import {createAction, props} from "@ngrx/store";
import {PlayerModel} from "../../models/Player.model";

export const GetGameAction = createAction('[Game] - Get Game');

export const BeginGetGameAction = createAction('[Game] - Begin Get Game');

export const SuccessGetGameAction = createAction(
  '[Game] - Success Get Game',
  props<{ payload: PlayerModel[] }>()
);

// Todo Dart Action

// Todo Dart Removal Action

export const ErrorGameAction = createAction('[Game] - Error', props<Error>());
