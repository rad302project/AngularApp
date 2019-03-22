import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/members/member.service';
import { IMember } from 'src/app/interfaces/member';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

 public students: IMember[] = [];
 addedStudent: IMember = {
   firstName: 'John',
   lastName: 'Parker',
   id: 'xy453dfsdf',
   type: 'student',
   registrationDate: new Date()
 }
 updateStudent: any = {
   lastName: 'Healy'
 }

  constructor( private memberService: MemberService) { }

  ngOnInit() {
  }

  updateStudentFunction(){
    this.memberService.updateMember(1, this.updateStudent);
  }

  addStudentFunction(){
    // this.memberService.addMember(this.addedStudent);
  }

  getStudentByIDFunction(){
    this.memberService.getMemberByID(1).subscribe(data => {
      this.updateStudent = data
      if(data != null)
        this.updateStudent.FirstName = 'Johny';

      console.log(data)
    });
  }

  deleteStudentFunction() {
    this.memberService.deleteMember(5);

  }

  getAllStudentsFunction(){
    this.memberService.getAllMembers().subscribe(data => {
      this.students = data;
      console.log(data)
     });
  }

}
