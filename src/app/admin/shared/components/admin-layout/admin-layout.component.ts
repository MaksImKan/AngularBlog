import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/components/services/auth.servise';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService
    ) { }

  ngOnInit(): void {
  }

  logout(event: Event){
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/admin', 'login'])
  }

}
