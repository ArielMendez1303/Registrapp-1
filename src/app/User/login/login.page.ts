import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule,FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {IonicModule} from '@ionic/angular';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonicModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {


  formulariologin: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formulariologin = this.fb.group(
      {'correo': new FormControl("",Validators.required),
        'password': new FormControl("",Validators.required)
    })
   }

  ngOnInit() {
  }

}
