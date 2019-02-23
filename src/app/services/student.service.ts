import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Student } from '../interfaces/student';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:8080/api";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(apiUrl + '/Students').pipe(
      tap(students => console.log('fetched students')),
      catchError(this.handleError('getAllStudents', []))
    );
  }

  getStudentByID(id: number): Observable<Student> {
    const url = `${apiUrl}/Students/${id}`
    return this.http.get<Student>(url).pipe(
      tap(_ => console.log(`fetched student id=${id}`)),
      catchError(this.handleError<Student>(`getStudentByID id=${id}`))
    );
  }

  addStudent(student: any): Observable<Student> {
    const url = `${apiUrl}/Students/POST/`;
    return this.http.post<Student>(url, student, httpOptions).pipe(
      tap((studentRes: Student) => console.log(`added Student w/ id=${studentRes.StudentID}`)),
      catchError(this.handleError<Student>('addStudent'))
    );
  }

  updateStudent(id: number, student: any): Observable<any> {
    const url = `${apiUrl}/Students/PUT/${id}`;
    return this.http.put(url, student, httpOptions).pipe(
      tap(_ => console.log(`updated Student id=${id}`)),
      catchError(this.handleError<any>('updateStudent'))
    );
  }

  deleteStudent(id: number): Observable<Student> {
    const url = `${apiUrl}/Students/DELETE/${id}`;
    return this.http.delete<Student>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Student id=${id}`)),
      catchError(this.handleError<Student>(`deleteStudent`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      return of(result as T);
    };
  }
}
