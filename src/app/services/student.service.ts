import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import gql from 'graphql-tag'; // Importar gql para las consultas

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private apollo: Apollo) {}

  // Consulta GraphQL para obtener el nombre y clases del estudiante
  getStudentData(): Observable<any> {
    const GET_STUDENT_DATA = gql`
      {
        students {
          name
          classes {
            name
          }
        }
      }
    `;

    // Realizar la consulta a la API
    return this.apollo.watchQuery({
      query: GET_STUDENT_DATA,
    }).valueChanges;
  }
}
