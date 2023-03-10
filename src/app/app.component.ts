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
      id: 1,
      name: "Cosmin",
      score: 120
    },
    {
      id: 2,
      name: "Laur",
      score: 90
    },
    {
      id: 3,
      name: "Andrei",
      score: 110
    },
    {
      id: 4,
      name: "Sorin",
      score: 122
    }
  ];

  public handleChangeScore(value: { index: number; delta: number }): void{

    this.players.forEach(player => {
      if (player.id === value.index){
        let val = player.score + value.delta;
        if (val >= 0){
          player.score += value.delta;
        }
      }
    })
  }

  getNextId(): number{
    if(this.players.length > 0){
      return this.players[this.players.length - 1].id + 1;
    }
    return 1;
  }

  getNewPlayer(name: string){
    if(name){
      this.players.push({
        id: this.getNextId(),
        name: name,
        score: 0
      })
    } else{
      alert("Name field cannot be empty");
    }

  }

  deletePlayer(id: number){
    this.players = this.players.filter(player => player.id != id);
  }
}
