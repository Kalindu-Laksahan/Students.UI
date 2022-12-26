import { Component } from '@angular/core';
import { Student } from './models/Students';
import { StudentsService } from './services/students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Students.UI';
  students: Student[]=[];

  constructor(private studentsService : StudentsService){}

  ngOnInit() : void{
    this.students = this.studentsService.getStudents();
    console.log(this.students);
  }

}
