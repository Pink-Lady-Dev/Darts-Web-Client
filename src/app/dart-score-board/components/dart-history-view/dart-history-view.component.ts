import {Component, Input, OnInit} from '@angular/core';
import {DartNotificationModel} from "../../../models/DartNotification.model";
import {DartDisplayModel} from "../../../models/DartDisplay.model";

@Component({
  selector: 'app-dart-history-view',
  templateUrl: './dart-history-view.component.html',
  styleUrls: ['./dart-history-view.component.scss', '../../../shared/styles/variables.scss']
})
export class DartHistoryViewComponent implements OnInit {

  @Input()
  darts : DartNotificationModel[];

  dartsDisplay : DartDisplayModel[];

  dartObj: DartNotificationModel[][];

  constructor() { }
  columnsToDisplay = ['points2', 'pie'];
  colors = [['#BCBCBC', '#969696'],['#5F5F5F', '#474747']]

  ngOnInit(): void {

  }

}
