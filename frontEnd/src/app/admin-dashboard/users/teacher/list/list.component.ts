import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/shared/models/User.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  create: boolean;
  users: User;
  user: User = new User();
  validateForm: FormGroup;
  isVisible : boolean;
  id: any;
  constructor(
    private service: UsersService,
    private fb: FormBuilder,
  ) { }

  read(id: any) {
    this.service.getuserById(id).subscribe(res => { console.log(res) })

  }
  add() {
    this.create = true;
  }
  update(iD: any) {
    this.id = iD
    console.log(this.id)
    this.isVisible = true;
    this.service.getuserById(iD).subscribe(res => {
      this.user = res
      this.validateForm.patchValue({ _id: this.user._id, userName: this.user.userName,email:this.user.email, isTeacher: true,isStudent: false,isAdmin: false })
    })
  }
  delete(id: any) {
    this.service.delete(id).subscribe(() => { this.get() })
  }
  ngOnInit(): void {
    this.get();
    this.validateForm = this.fb.group({
      _id: [''],
      userName: ['', [Validators.required]],
      email: [''],
      isTeacher: [''],
      isStudent: [''],
      isAdmin: [''],
    });
  }
  get() {
    this.service.getuser().subscribe(
      res => {
          this.users = res      
      }
    )
  }
  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.service.updateuser(this.validateForm.value).subscribe(res => { this.get() })
  }

  refresh($: any) {
    this.get()
    this.create = $
  }
  filterUser(user: User) {
    return user.isTeacher == true
  }
}
