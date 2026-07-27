import { Component, inject } from '@angular/core';
import { FormBuilder, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { loginFormErrors } from '../loginModels';
import { SHARED_UI } from '../../../shared/components';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule, SHARED_UI],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  private fb: FormBuilder = inject(FormBuilder);

  loginFormErrors = loginFormErrors;

  loginForm = this.fb.group({
    userName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    password: ["", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/)]]
  });

  onSubmit():void{
    
  }
}
