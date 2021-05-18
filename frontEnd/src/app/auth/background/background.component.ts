import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
@Output() item =new EventEmitter()
@Output() next =new EventEmitter()
  data = [
    {
      background: 'Primary School'
    },
    {
      background: 'High School'
    },
    {
      background: 'University'
    },
    {
      background: 'Graduate/PHD'
    },
    {
      background: 'Working (School Graduate)'
    },
    {
      background: 'Working (Univesity Graduate)'
    },

  ];
  constructor(

  ) {
  }

  ngOnInit(): void {
  }
  set(item:string){
this.item.emit(item)
  }
  continue(){
this.next.emit(true)
  }
}
