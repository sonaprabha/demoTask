// login-form.component.ts
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {AuthServiceService} from '../../../services/auth-service.service';
import {User} from '../../../model/user';
import { Router } from '@angular/router';

// Assume an AuthService is provided in root

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [ReactiveFormsModule]
})


export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  isLoading = false;
  serverError: string | null = null;
  
  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
  private router:Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    debugger;
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });


    // Reset server error when user starts typing
    this.loginForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        console.log('Form value changed:', data);
        debugger;
        if (this.serverError) {
          this.serverError = null;
        }
      });
 
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched; // 👈 show validation errors
      return;
    }

    this.isLoading = true;
    this.serverError = null;

    // const { email, password } = this.loginForm.value;
    const user:User = {
      // email: this.loginForm.value.email,
      // password: this.loginForm.value.password
      email:"test@example.com",
      password:"123456"

    }

    this.authService.login(user)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          console.log('Login response:', res);
          this.isLoading = false;
          this.router.navigate(['/dashboard']);
          // Redirect or show success message – handled by service/guard
        },
        error: (err:any) => {
          this.isLoading = false;
          this.serverError = err.message || 'Invalid email or password.';
            this.router.navigate(['/dashboard']);
        }
      });
  }

  // Convenience getters for template access
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}