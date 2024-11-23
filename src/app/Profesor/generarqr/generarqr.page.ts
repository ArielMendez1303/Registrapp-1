import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode'; // Importar el módulo QR


@Component({
  selector: 'app-generarqr',
  templateUrl: './generarqr.page.html',
  styleUrls: ['./generarqr.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink, QRCodeModule]
})
export class GenerarqrPage implements OnInit {

  qrData: string = "https://random-word-api.herokuapp.com/word?number=1";

  constructor() { }

  ngOnInit() {
  }

}
