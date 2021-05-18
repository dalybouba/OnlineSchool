import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  @Output() item =new EventEmitter()
  @Output() next =new EventEmitter()
    data = [
      {
        language: 'Turkish'
      },
      {
        language: 'German'
      },
      {
        language: 'French'
      },
      {
        language: 'Other'
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
