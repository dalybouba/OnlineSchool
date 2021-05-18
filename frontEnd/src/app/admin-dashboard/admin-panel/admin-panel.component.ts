import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  isCollapsed = false;
  constructor(
    public authService: AuthService,
    private router: Router,
    private service:UsersService
  ) { }

  ngOnInit(): void {
  }
   logout() {
    
    this.authService.logout()
     this.router.navigate(['/login'])
}


}
