import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/interfaces/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

 public students: Student[] = [];
 addStudent: Student = {
   FirstName: 'John',
   LastName: 'Parker',
   StudentID: 5,
   RegistrationDate: new Date()
 }
 updateStudent: Student;

  constructor( private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.addStudent(this.addStudent);
    this.studentService.getAllStudents().subscribe(data => {
     this.students = data;
     console.log(data)
    });
    this.studentService.getStudentByID(5).subscribe(data => {
      this.updateStudent = data
      this.updateStudent.FirstName = 'Johny';
      console.log(data)
    });
    this.studentService.updateStudent(5, this.updateStudent);
    this.studentService.deleteStudent(5);
  }

}
