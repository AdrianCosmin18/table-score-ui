import { Component } from '@angular/core';
import {Player} from "./models/player-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table-score';

  public players: Player[] = [
    {
      name: "Cosmin",
      score: 120
    },
    {
      name: "Laur",
      score: 90
    },
    {
      name: "Andrei",
      score: 110
    },
    {
      name: "Sorin",
      score: 122
    }
  ];

  handleChangeScore(value: {index: number, delta: number}): void{
    this.players[value.index].score += value.delta;
  }
}
