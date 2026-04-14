import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/model/user';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit , OnDestroy{
  registerForm!: FormGroup;
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
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });


    // Reset server error when user starts typing
    this.registerForm.valueChanges
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
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched; // 👈 show validation errors
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
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

