import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../models/player-model";


@Component({
  selector: '.app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() playersInput:Player[] = [];
  constructor() { }

  ngOnInit(): void {
  }


  countTotalScore():number{
    let sum = 0;
    this.playersInput.forEach(player => {
      sum += player.score;
    });
    return sum;
  }

  countPlayers(): number{
    return this.playersInput.length;
  }

}
