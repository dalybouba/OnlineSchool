import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Input() create:boolean;
  @Output() out= new EventEmitter()
  validateForm: FormGroup;
    constructor(
      private service: UsersService,
      private fb: FormBuilder
    ) { }
  
    ngOnInit(): void {
      this.validateForm = this.fb.group({
        _id: [''],
        userName: ['', [Validators.required]],
        email: [''],
        isTeacher: [true],
        isStudent: [false],
        isAdmin: [false],
      });
    }
  
  
  
    
    handleOk(): void {
      this.create = false;
      this.out.emit(false)
    }
  
    handleCancel(): void {
      this.create = false;
    }
  
    submitForm(): void {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
      this.service.user(this.validateForm.value).subscribe(res => {console.log(res) })
    }

}
