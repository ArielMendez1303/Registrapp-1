import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login-profes',
  templateUrl: './login-profes.page.html',
  styleUrls: ['./login-profes.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink]
})
export class LoginProfesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
