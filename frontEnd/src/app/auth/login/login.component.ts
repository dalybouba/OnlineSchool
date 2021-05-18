import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzResizableDirective } from 'ng-zorro-antd/resizable';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
this.authService.login(this.validateForm.value).subscribe(
  (res)=>{
    if (res.isAdmin===true) {
      this.router.navigate(['/admin'])
    }
   else if (res.isStudent===true) {
    this.router.navigate(['/student'])
   } 
  }
)
  }

  constructor(
    private fb: FormBuilder,
    private authService:AuthService,
    private router:Router
    ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }


}
