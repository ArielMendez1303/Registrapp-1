import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {IonicModule} from '@ionic/angular'
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, RouterLink]
})
export class RegisterPage implements OnInit {

  formularioRegistro:FormGroup;
  constructor(public fb:FormBuilder) {
    this.formularioRegistro = this.fb.group(
      {'correo': new FormControl("",Validators.required),
        'password': new FormControl("",Validators.required),
        'confirmacionPassword': new FormControl("",Validators.required)
    })
   }

  ngOnInit() {
  }

}
