import { Injectable, Inject, forwardRef } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(forwardRef(() => Auth)) private auth: Auth) {}

  async register(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('Registro exitoso:', userCredential);
    } catch (error) {
      console.error('Error durante el registro:', error);
    }
  }

  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      console.log('Inicio de sesión exitoso:', userCredential);
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
    }
  }
}
