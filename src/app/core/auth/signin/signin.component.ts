import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { error } from 'console';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly toastrService = inject(ToastrService);
  signInForm!: FormGroup;
  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.signInForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }
  submitLoginForm() {
    console.log(this.signInForm.value);
    if (this.signInForm.valid) {
      this.authService.signIn(this.signInForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.message === 'success') {
            this.router.navigate(['/timeline']);
            localStorage.setItem('socialToken', res.token);
            // console.log('your token', localStorage.getItem('socialToken'));
            this.authService.getUserData().subscribe({
              next: (res) => {
                console.log(res);
                if (res.message === 'success') {
                  this.authService.userData = res.user;
                  this.toastrService.success(res.message);
                }
              },
            });
          }
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else {
      console.log(this.signInForm.markAllAsTouched());
    }
  }
}
