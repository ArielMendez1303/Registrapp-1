import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CamaraComponent } from './componentes/camara/camara.component';
import { QRCodeModule } from 'angularx-qrcode'; // Importar el módulo QR
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core'; // Importar el cache
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule , RouterLink, CommonModule , FormsModule,CamaraComponent, QRCodeModule,ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: () => {
        return {
          cache: new InMemoryCache(),
          uri: 'https://school-api.graphql.guide/', // URL de la API GraphQL
        };
      },
    },
  ],
})
export class AppComponent {
  constructor() {}
}
