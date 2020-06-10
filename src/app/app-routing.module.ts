import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {DartScoreBoardModule} from "./dart-score-board/dart-score-board.module";

const routes: Routes = [
  { path: 'dartScoreBoard', component: DartScoreBoardModule }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
