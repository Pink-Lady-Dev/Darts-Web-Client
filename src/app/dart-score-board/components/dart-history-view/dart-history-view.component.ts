import {Component, Input, OnInit} from '@angular/core';
import {DartNotificationModel} from "../../../models/DartNotification.model";
import {DartDisplayModel} from "../../../models/DartDisplay.model";

@Component({
  selector: 'app-dart-history-view',
  templateUrl: './dart-history-view.component.html',
  styleUrls: ['./dart-history-view.component.scss']
})
export class DartHistoryViewComponent implements OnInit {

  @Input()
  darts : DartNotificationModel[];

  darts2 : DartNotificationModel[];

  dartsDisplay : DartDisplayModel[];

  dartObj: DartNotificationModel[][];

  constructor() { }

  colors = [['#BCBCBC', '#969696'],['#5F5F5F', '#474747']]

  ngOnInit(): void {
    this.darts2 =
      [
        new DartNotificationModel("one", 0,12,12,false,false),
        new DartNotificationModel("two", 1,12,12,false,false),
        new DartNotificationModel("three", 2,12,12,false,false),
        new DartNotificationModel("four", 0,12,12,false,false),
        new DartNotificationModel("five", 1,12,12,false,false),
        new DartNotificationModel("six", 2,12,12,false,false),
        new DartNotificationModel("seven", 0,12,12,false,false),
        new DartNotificationModel("eight", 1,12,12,false,false),
      ]

    const empty: DartNotificationModel[] = []
    // this.dartObj = [[]]
    let cCount = 0;
    let index = 0
    while( index < this.darts2.length)
    {
      // console.log(this.darts2[index])

      if (this.darts2[index].throwNumber == 0){

        let index2 = 0;
        while( (index + index2) < this.darts2.length && !(index2 > 0 && this.darts2[index + index2].throwNumber == 0))  {

          console.log(this.darts2[(index + index2)])

          const dart = new DartDisplayModel(
            this.darts2[(index + index2)],
            this.colors[(cCount % 2)][((index2 + cCount) % 2)]
          );
          if (this.dartsDisplay === undefined)
          {
            this.dartsDisplay = [dart];
          } else {
            this.dartsDisplay = this.dartsDisplay.concat([dart]);
          }
          index2++;
        }
        cCount += 1
        index = index + index2;
      }

    }
    console.log(this.dartObj)
  }

}
