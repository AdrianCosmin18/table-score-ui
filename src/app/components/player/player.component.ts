import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../models/player-model";

@Component({
  selector: '.player-card',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() playerInput:Player={
    name: "name",
    score: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
