import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';  // Importa tu AuthService
import { Auth } from '@angular/fire/auth';  // Importa Auth desde Firebase 9+
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonicModule, ReactiveFormsModule],
})

export class LoginPage implements OnInit {
  formulariologin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,  // Asegúrate de inyectar AuthService
    private router: Router
  ) {
    // Inicializa el formulario con validaciones
    this.formulariologin = this.fb.group({
      correo: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnInit() {}

  async onLogin() {
    if (this.formulariologin.valid) {
      const { correo, password } = this.formulariologin.value;

      try {
        await this.authService.login(correo, password);  // Llama al servicio para hacer login
        console.log('Usuario autenticado');
        this.router.navigate(['/home']);
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
      }
    } else {
      console.error('Formulario no válido');
    }
  }
}
