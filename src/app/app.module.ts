import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestDisplayComponent } from './components/test-display/test-display.component';
import { GameInfoComponent } from './components/game-info/game-info.component';
import { AppRoutingModule } from './app-routing.module';
import {DartScoreBoardModule} from "./dart-score-board/dart-score-board.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TestDisplayComponent,
    GameInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DartScoreBoardModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
