import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-display',
  templateUrl: './test-display.component.html',
  styleUrls: ['./test-display.component.css']
})
export class TestDisplayComponent implements OnInit {

  @Input()
  public players : String[]

  constructor() { }

  ngOnInit(): void {
  }

}
