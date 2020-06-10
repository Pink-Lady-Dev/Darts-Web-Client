import {Component, Input, OnInit} from '@angular/core';
import {GameMetaNotificationModel} from "../../models/GameMetaNotification.model";

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {

  @Input()
  public GameMeta : GameMetaNotificationModel

  constructor() { }

  ngOnInit(): void {
  }

}
