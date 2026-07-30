import { Component, inject } from '@angular/core';
import { FormBuilder, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { loginFormErrors, LoginFormModel } from '../loginModels';
import { SHARED_UI } from '../../../shared/components';
import { AuthService } from '../../../core/services/auth-service/auth-service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule, SHARED_UI],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  private fb: FormBuilder = inject(FormBuilder);
  private authService:AuthService = inject(AuthService);
  private router:Router = inject(Router);

  loginFormErrors = loginFormErrors;

  loginForm = this.fb.nonNullable.group({
    userName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    password: ["", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/)]]
  });

  onSubmit():void{
    if(this.loginForm.valid){
      const payload = this.loginForm.getRawValue(); 

      this.authService.userLogin(payload).subscribe(
        {
          next: (res) => {
              localStorage.setItem("authToken",res.token);
              alert("Login Successful");
              this.router.navigate(['/']);

        },
          error: (err:HttpErrorResponse) => {
            alert(err.error);
      }});

    }
  }
}
