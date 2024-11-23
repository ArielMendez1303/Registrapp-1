import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'
import { RouterLink } from '@angular/router';
import { CamaraComponent } from 'src/app/componentes/camara/camara.component';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-registrar-qr',
  templateUrl: './registrar-qr.page.html',
  styleUrls: ['./registrar-qr.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink, CamaraComponent]
})
export class RegistrarQrPage implements OnInit {

  constructor() { }

  ngOnInit() {
    Camera.requestPermissions();
  }

  async takePhotos(){
    
    const takePicture = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });
    }
  }
}
