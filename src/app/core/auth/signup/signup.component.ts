import { ToastrService } from 'ngx-toastr';
import { JsonPipe, NgClass } from '@angular/common';
import { AuthService } from './../services/auth.service';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  RxReactiveFormsModule,
  RxwebValidators,
} from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-signup',
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    NgClass,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly toastrService = inject(ToastrService);
  signUpForm: FormGroup = {} as FormGroup;
  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  years: number[] = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );
  fName: string = '';
  lName: string = '';
  day: string = '';
  month: string = '';
  year: string = '';
  changeWork: boolean = false;
  isCreated: boolean = false;
  msgError: string = '';
  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.signUpForm = this.formBuilder.group(
      {
        name: [null, [Validators.required]],
        email: [null, [Validators.required, RxwebValidators.email()]],
        password: [
          null,
          [
            Validators.required,
            RxwebValidators.password({
              validation: {
                maxLength: 25,
                minLength: 6,
                upperCase: true,
                digit: true,
                specialCharacter: true,
              },
              message: {
                maxLength: 'Password must not exceed 25 characters',
                minLength: 'Password must be at least 6 characters long',
                upperCase:
                  'Password must contain at least one uppercase letter',
                digit: 'Password must be have digit Number (1,2,3,...)',
                specialCharacter:
                  'Password must be have spcial charcter (@,#,$,...)',
              },
            }),
          ],
        ],
        rePassword: [
          null,
          [
            Validators.required,
            RxwebValidators.compare({
              fieldName: 'password',
              message: 'Passwords do not match',
            }),
          ],
        ],
        dateOfBirth: [null, [Validators.required]],
        gender: [null, [Validators.required]],
      },
      { updateOn: 'blur' }
    );
  }
  setDay(Event: Event): void {
    const el = Event.target as HTMLSelectElement;
    this.day = el.value;
    console.log(this.day);
  }
  setMonth(Event: Event): void {
    const el = Event.target as HTMLSelectElement;
    this.month = el.value;
    console.log(this.month);
  }
  setYear(Event: Event): void {
    const el = Event.target as HTMLSelectElement;
    this.year = el.value;
    console.log(this.year);
  }
  setGender(Event: Event): void {
    const el = Event.target as HTMLInputElement;
    this.signUpForm.get('gender')?.setValue(el.value);
    console.log(this.signUpForm.get('gender')?.value);
  }
  setNameValue(): void {
    this.signUpForm.get('name')?.setValue(this.fName + ' ' + this.lName);
  }
  setDateFormat(): void {
    this.signUpForm
      .get('dateOfBirth')
      ?.setValue(`${this.day}-${this.month}-${this.year}`);
  }
  submitSignUpForm(): void {
    this.setNameValue();
    this.setDateFormat();
    if (this.signUpForm.valid) {
      this.authService.signUp(this.signUpForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.message == 'success') {
            this.toastrService.success(res.message);
            this.isCreated = true;
            setTimeout(() => {
              this.router.navigate(['signin']);
            }, 1000);
          }
        },
        error: (err) => {
          this.isCreated = false;
          this.msgError = err.error.error;
        },
      });
    }
    console.log(this.signUpForm.value);
  }
}
