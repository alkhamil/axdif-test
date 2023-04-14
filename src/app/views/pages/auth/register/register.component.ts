import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface RegisterSlide {
  image: string,
  title: string,
  description: string,
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  slides: RegisterSlide[] = [
    {
      image: 'assets/images/slide-1.png',
      title: 'Manage Task Easily & Efficiently',
      description: 'Increase employee productivity and performance in a measurable and precision system in one application.'
    },
    {
      image: 'assets/images/slide-2.png',
      title: 'Communication Is Key',
      description: 'Connect with your coworkers anywhere like you are in one workspace. Very simple and fast.'
    },
    {
      image: 'assets/images/slide-3.png',
      title: 'Employee Self-Service',
      description: 'Simplify the administrative affairs of the company where you work wherever and whenever. Let’s get started with all these conveniences'
    }
  ];

  constructor (
    private router: Router
  ) {}
  
  ngOnInit(): void {
    
  }

  onClickRegister() {
    this.router.navigate(['auth/register-success'])
  }
}
