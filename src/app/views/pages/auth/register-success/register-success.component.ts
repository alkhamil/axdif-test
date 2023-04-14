import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface RegisterSlide {
  image: string,
  title: string,
  description: string,
}

interface RegisterSuccessStep {
  image: string,
  title: string,
  description: string
}
@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.scss']
})
export class RegisterSuccessComponent {
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

  steps: RegisterSuccessStep[] = [
    {
      image: 'assets/images/success-1.png',
      title: 'Verify your account',
      description: 'A verification link has been sent to your email account'
    },
    {
      image: 'assets/images/success-2.png',
      title: 'Login to your account',
      description: 'Login to your Axdif account'
    },
    {
      image: 'assets/images/success-3.png',
      title: 'Setup your data',
      description: 'Input your employee data and get the ease of managing employee'
    }
  ]

  constructor (
    private router: Router
  ) {}

  setMarginLeft(i: number) {
    let newClass = ''
    if (i === 1) {
      newClass = 'pad-left-2'
    } else if (i === 2) {
      newClass = 'pad-left-3'
    }
    return newClass
  }

  onClickToLogin() {
    this.router.navigate(['auth/login'])
  }
}
