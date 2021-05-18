import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-congratulation',
  templateUrl: './congratulation.component.html',
  styleUrls: ['./congratulation.component.css']
})
export class CongratulationComponent implements OnInit {

  constructor(
    private router: Router,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
  }
  // continue() {
  //   this.router.navigate(['/login'])
  // }
}
