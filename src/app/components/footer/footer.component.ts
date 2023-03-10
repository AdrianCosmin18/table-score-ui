import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: '.footer-table',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() playerEmitName = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitPlayerName(name: string){
    this.playerEmitName.emit(name);
  }
}
