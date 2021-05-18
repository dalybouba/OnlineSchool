import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ExeciceService } from 'src/app/services/execice.service';
import { Execice } from 'src/app/shared/models/Execice.model';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {
  private searchSubscription:any;
  public keyUp = new Subject<KeyboardEvent>();
  validateForm!: FormGroup;
  exercices: Execice
  task: Execice;
  response:string
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

  }
get(){
  this.exercice.get().subscribe(
    (res) => {
      console.log(res)
      this.exercices = res
    }
  )
}
  constructor(
    private fb: FormBuilder,
    private exercice: ExeciceService,
    private router: Router
  ) { 
   
    this.get()
  }

  ngOnInit(): void {
    this.current= 0
    this.validateForm = this.fb.group({
      _id: [''],
      title: [''],
      number: [''],
      question: [null],
      response: [null, [Validators.required]],
    });
  }

  current:number = 0;

  index = 'First-content';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }
  filterUser(task: Execice) {
    return task.number === 1 ;
  }

  check(response: string,_id:any) {
    if(this.searchSubscription){
      this.searchSubscription.unsubscribe();
  }
    this.exercice.getById(_id).subscribe(
      res => {
        if (res.response===response) {
          this.response = res.response;
        }
      
      }
    );
  }
}
