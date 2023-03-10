import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Player} from "../../models/player-model";
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '.player-card',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() playerInput: Player = {
    id: 0,
    name: "name",
    score: 0
  }
  @Output() changeScore = new EventEmitter<{index: number, delta: number}>();
  @Output() deleteEmitter = new EventEmitter<number>();
  public faClose = faClose;

  constructor() { }

  ngOnInit(): void {
    console.log(this.playerInput);
  }

  public onChangeScore(value:{index:number, delta:number}):void{
    this.changeScore.emit(value);
  }

  emitPlayerId(id: number){
    this.deleteEmitter.emit(id);
  }
}
