import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  captcha: string = '';

  onSubmit() {
    // Lógica de autenticación
    console.log("Usuario:", this.username);
    console.log("Contraseña:", this.password);
    console.log("Captcha:", this.captcha);
  }
}
