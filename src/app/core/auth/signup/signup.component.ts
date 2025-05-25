import { NgClass } from '@angular/common';
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
} from '@rxweb/reactive-form-validators'; // <-- #2 import module

// interface NameValidations {
//   required: boolean;
//   minLength: boolean;
//   touched: boolean;
// }

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
  // NameValidations: NameValidations = {
  //   required: false,
  //   minLength: false,
  //   touched: false,
  // };
  changeWork: boolean = false;

  ngOnInit(): void {
    this.initForm();
    // console.log(this.signUpForm.get('email'));
  }
  initForm(): void {
    this.signUpForm = this.formBuilder.group(
      {
        name: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        password: [
          null,
          [
            Validators.required,
            RxwebValidators.password({
              validation: {
                maxLength: 25,
                minLength: 6,
                digit: true,
                upperCase: true,
              },
            }),
          ],
        ],
        rePassword: [null, [Validators.required]],
        dateOfBirth: [null, [Validators.required]],
        gender: [null, [Validators.required]],
      },
      { updateOn: 'blur' }
    );
  }
  submitSignInForm(): void {
    // if (this.signUpForm.valid) {
    this.signUpForm.get('name')?.setValue(this.fName + ' ' + this.lName);
    this.signUpForm
      .get('dateOfBirth')
      ?.setValue(`${this.day}-${this.month}-${this.year}`);
    // }
    console.log(this.signUpForm.value);
  }
  isNameValid(uName: string): boolean {
    // this.NameValidations.touched = true;
    // function checkRequired(): boolean {
    //   console.log(uName.length);
    //   return uName.length > 1;
    // }
    // function checkMinLength(): boolean {
    //   return uName.length > 2;
    // }
    // this.NameValidations.required = checkRequired();
    // this.NameValidations.minLength = checkMinLength();
    // console.log(this.NameValidations, uName);
    // return this.NameValidations;
    setTimeout(() => {}, 3000);
    return false;
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
}
