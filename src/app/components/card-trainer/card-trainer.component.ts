// card-trainer.component.ts

import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginTrainer } from 'src/app/models/login-trainer';
import { Trainer } from 'src/app/models/trainer';
import { TrainerService } from 'src/app/services/trainer.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-card-trainer',
  templateUrl: './card-trainer.component.html',
  styleUrls: ['./card-trainer.component.css'],
})
export class CardTrainerComponent {
  @Input() trainer!: Trainer;

  trainerLog: LoginTrainer = {
    nickname: '',
    password: '',
  };
  isFormValidate = false;
  loginNone = false;

  showPassword: boolean = false;

  constructor(
    private trainerService: TrainerService,
    private router: Router,
    private authService: AuthService
  ) {}

  login(loginForm: NgForm) {
    this.isFormValidate = true;
    if (loginForm.valid) {
      this.trainerService.loginTrainer(this.trainerLog).subscribe({
        next: (loginResponse) => {
          this.authService.loginTrainer(loginResponse.trainer);

          // Utilise l'ID du dresseur connecté pour la redirection
          this.router.navigate(['/trainer/', loginResponse.trainer.id]);
        },
        error: (error) => {
          console.error('Login error:', error);
          this.loginNone = true;
        },
      });
    }
  }
  
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
