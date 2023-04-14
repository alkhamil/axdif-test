import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  appearance: boolean
  mobileNavMenuSelected: string = 'Overview'

  constructor (
    private router: Router
  ) {}

  onClickLogout() {
    localStorage.removeItem('token')
    this.router.navigate(['auth/register'])
  }
}
