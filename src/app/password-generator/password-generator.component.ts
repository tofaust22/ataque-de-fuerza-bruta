import { Component } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent {
  length = 8;
  includeLetters = true;
  includeNumbers = true;
  includeSymbols = false;
  generatedPassword = '';
  passwordStrength = 'Débil';

  generatePassword() {
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let password = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      password += validChars[index];
    }

    this.generatedPassword = password;
    this.passwordStrength = this.evaluatePasswordStrength(password);
  }

  evaluatePasswordStrength(password: string): string {
    let strengthScore = 0;

    if (password.length >= 8) strengthScore += 1;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strengthScore += 1; // Letras mayúsculas y minúsculas
    if (/\d/.test(password)) strengthScore += 1; // Números
    if (/[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(password)) strengthScore += 1; // Símbolos

    if (strengthScore <= 1) return 'Débil';
    if (strengthScore === 2) return 'Medio';
    if (strengthScore >= 3) return 'Fuerte';

    return 'Débil';
  }

  getPasswordStrengthClass(): string {
    switch (this.passwordStrength) {
      case 'Débil':
        return 'bg-danger';
      case 'Medio':
        return 'bg-warning';
      case 'Fuerte':
        return 'bg-success';
      default:
        return '';
    }
  }

  getPasswordStrengthPercentage(): number {
    let strengthScore = 0;

    if (this.generatedPassword.length >= 8) strengthScore += 1;
    if (/[A-Z]/.test(this.generatedPassword) && /[a-z]/.test(this.generatedPassword)) strengthScore += 1;
    if (/\d/.test(this.generatedPassword)) strengthScore += 1;
    if (/[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(this.generatedPassword)) strengthScore += 1;

    // Calcula el porcentaje según la puntuación máxima de 4
    return (strengthScore / 4) * 100;
  }
}
