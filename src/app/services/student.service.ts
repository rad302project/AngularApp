import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Student } from '../interfaces/student';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private api: string = 'http://localhost:8080/api'
  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.api + '/Students')
  }

}
