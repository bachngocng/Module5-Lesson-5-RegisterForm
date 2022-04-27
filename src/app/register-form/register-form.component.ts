import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Country} from '../country';
import {User} from '../user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  countries: Country[] = [
    {
      id: 1,
      name: 'USA'
    },
    {
      id: 2,
      name: 'Canada'
    },
    {
      id: 3,
      name: 'UK'
    }];
  user: User = {};

  createEvent = new EventEmitter<User>();

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.requiredTrue]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required,Validators.pattern("/^\\+84\\d{9,10}$/")])
  });

  constructor() {
  }

  ngOnInit() {
    this.email.setValue(this.user.email);
    this.password.setValue(this.user.password);
    this.confirmPassword.setValue(this.user.confirmPassword);
    this.country.setValue(this.user.country);
    this.age.setValue(this.user.age);
    this.gender.setValue(this.user.gender);
    this.phone.setValue(this.user.phone);
  }

  submit(registerForm) {
    console.log(this.registerForm.value);
  }


  get email() {
    return this.registerForm.get('email');
  }


  get password() {
    return this.registerForm.get('password');
  }


  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }


  get country() {
    return this.registerForm.get('country');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  get phone() {
    return this.registerForm.get('phone');
  }
}
