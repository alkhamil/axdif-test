import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  loading: boolean = false

  constructor (
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['demo', Validators.required],
      password: ['demo', Validators.required]
    })
  }

  onClickSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.loading = true
    this.authService.login(this.form.value).then(res => {
      if (res.token) {
        localStorage.setItem('token', res.token)
        this.loading = false
        this.router.navigate(['/dashboard'])
      }
    })
    
    
  }
    
}
