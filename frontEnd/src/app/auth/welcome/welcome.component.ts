import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/shared/models/User.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  validateForm: FormGroup
  User: User;
  data = [
    {
      title: 'individually'
    },
    {
      title: 'teacher'
    },
    {
      title: 'student'
    },

  ];
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.User = JSON.parse(activatedRoute.snapshot.params["User"]);


  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      isTeacher: [null],
      isStudent: [null],
      isUndividual: [null],
    });
  }

  size: NzButtonSize = 'large';
  update(title: string) {
    if (title.toString() === "student") {
      this.User = {
        userName: this.User.userName,
        email: this.User.email,
        password: this.User.password,
        isTeacher: false,
        isStudent: true,
        isIndividual: false,
        isAdmin: false
      }
    }
    else if (title.toString() === "teacher") {
      this.User = {
        userName: this.User.userName,
        email: this.User.email,
        password: this.User.password,
        isTeacher: true,
        isStudent: false,
        isIndividual: false,
        isAdmin: false
      }
    }
    else if (title === "individually") {
      this.User = {
        userName: this.User.userName,
        email: this.User.email,
        password: this.User.password,
        isTeacher: false,
        isStudent: false,
        isIndividual: true,
        isAdmin: false
      }
    }
    console.log('user after select role ', this.User)
  }

  signUp() {
    console.log('signup user', this.User)
    // this.authService.register(this.User).subscribe(
    //   () => {
    //     this.router.navigate(['code'])
    //   }
    // )
    if (this.User.isStudent || this.User.isIndividual) {
     return this.router.navigate(['/studentinformation',JSON.stringify(this.User)] ,{ skipLocationChange: true})
    }
  }
}
