import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DartScoreBoardPageComponent } from './components/dart-score-board-page/dart-score-board-page.component';
import { X01PlayerHalfComponent } from './components/x01-player-half/x01-player-half.component';
import { DartHistoryViewComponent } from './components/dart-history-view/dart-history-view.component';
import {DataViewModule, TableModule} from "primeng";
import {GameReducer} from "./reducers/game.reducer";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {GameEffects} from "./effects/game.effects";
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [DartScoreBoardPageComponent, X01PlayerHalfComponent, DartHistoryViewComponent],
  exports: [
    DartScoreBoardPageComponent
  ],
    imports: [
        CommonModule,
        TableModule,
        DataViewModule,
        HttpClientModule,
        StoreModule.forRoot({ game: GameReducer }),
        EffectsModule.forRoot([GameEffects]),
    ],

})
export class DartScoreBoardModule { }
