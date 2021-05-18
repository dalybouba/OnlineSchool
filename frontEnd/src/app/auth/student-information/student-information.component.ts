import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/shared/models/User.model';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})
export class StudentInformationComponent implements OnInit {
  User: User;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.User = JSON.parse(activatedRoute.snapshot.params["User"]);
  }

  ngOnInit(): void {
    console.log(this.User)
  }
  current = 0;

  index = 'First-content';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
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
      case 3: {
        this.index = 'fourth-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }
  refresh($event: boolean) {
    this.next()
  }
  updateUser($event: string) {
    console.log($event)
    Object.assign(this.User, $event);
     JSON.stringify(this.User);
    console.log('try',this.User)
  }
  done(): void {
    console.log('finaluser',this.User);
    this.authService.register(this.User).subscribe(res=>{
      console.log(res)
      this.router.navigate(['/login'])
    })

  }

}
