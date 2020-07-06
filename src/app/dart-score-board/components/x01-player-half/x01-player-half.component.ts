import {Component, Input, OnInit} from '@angular/core';
import {PlayerModel} from "../../../models/Player.model";
import {strict} from "assert";

@Component({
  selector: 'app-x01-half-player',
  templateUrl: './x01-player-half.component.html',
  styleUrls: ['./x01-player-half.component.scss']
})
export class X01PlayerHalfComponent implements OnInit {

  @Input()
  public player : PlayerModel

  public rads_1 = [[0,0,0]];
  public rads_2 = [[0,0,0]];

  constructor() { }

  ngOnInit(): void {

    console.log("Name: " + this.player.name + ", " + this.player.score)

    // Switch this to radians and we can multiply by the desired radius
    this.rads_1 = [[115,225, 0], [132,223, 1], [162,213, 0], [192,192, 1], [213,164, 0], [223,132, 1], [223, 97, 0], [213,65, 1], [192,37, 0], [164, 17, 1], [132,7, 0]];
    this.rads_2 = [[115,5, 0], [98,6, 1], [65,17, 0], [37,37, 1], [17,65, 0], [6,98, 1], [6, 132, 0], [17,165, 1], [37,193, 0], [65, 213, 1], [97,223, 0]];
  }

}
