import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {

  @Output() item = new EventEmitter()
  @Output() next = new EventEmitter()
  selectedValue = null;
  data = [
    {
      age: '18'
    },
    {
      age: '19'
    },
    {
      age: '20'
    },
    {
      age: '21'
    },
    {
      age: '22'
    },
    {
      age: '23'
    },
    {
      age: '24'
    },
    {
      age: '25'
    },
  ];
  constructor(

  ) {
  }

  ngOnInit(): void {
  }
  set() {
    this.item.emit(this.selectedValue)
  }
  continue() {
    this.item.emit(this.selectedValue)
    this.next.emit(true)
  }

}
