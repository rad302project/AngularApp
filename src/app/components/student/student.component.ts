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
 addedStudent: Student = {
   FirstName: 'John',
   LastName: 'Parker',
   StudentID: 5,
   RegistrationDate: new Date()
 }
 updateStudent: any = {
   LastName: 'Healy'
 }

  constructor( private studentService: StudentService) { }

  ngOnInit() {
  }

  updateStudentFunction(){
    this.studentService.updateStudent(1, this.updateStudent);
  }

  addStudentFunction(){
    this.studentService.addStudent(this.addedStudent);
  }

  getStudentByIDFunction(){
    this.studentService.getStudentByID(1).subscribe(data => {
      this.updateStudent = data
      if(data != null)
        this.updateStudent.FirstName = 'Johny';

      console.log(data)
    });
  }

  deleteStudentFunction() {
    this.studentService.deleteStudent(5);

  }

  getAllStudentsFunction(){
    this.studentService.getAllStudents().subscribe(data => {
      this.students = data;
      console.log(data)
     });
  }

}
