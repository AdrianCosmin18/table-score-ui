import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: '.counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }


  @Input() id:number=0;
  @Input() score:number=0;
  @Output() changeScore=  new EventEmitter<{index:number,delta:number}>();

  ngOnInit(): void {
    console.log(this.score);
  }


  onChangeScore(nr: number): void{
    this.changeScore.emit({index: this.id, delta: nr});
  }
}
