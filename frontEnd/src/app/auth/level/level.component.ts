import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {
  @Output() item = new EventEmitter()
  @Output() next = new EventEmitter()
  radioValue={
    title: '',
    level: ''
  }
  data = [
    {
      title: 'Are you starting new',
      level: 'start from zerro'
    },
    {
      title: 'Do you already know some',
      level: 'Determine your level'
    },

  ];
  constructor(

  ) {
  }

  ngOnInit(): void {
  }
  set() {
    this.item.emit(this.radioValue)
  }
  continue() {
    delete this.radioValue.title
    this.item.emit(this.radioValue)     
    this.next.emit(true)
  }
}
