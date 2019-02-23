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
  constructor( private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getAllStudents().subscribe(data => {
     this.students = data;
     console.log(data)
    });
  }

}
