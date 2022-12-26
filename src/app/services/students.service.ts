import { Injectable } from '@angular/core';
import { Student } from '../models/Students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  public getStudents() : Student[]{
    let student = new Student();
    student.id = 1;
    student.name="Kaliindu";
    student.firstName="kalindu";
    student.lastName="Laksahan";
    student.grade="12";
    student.rank="3rd";

    return[student];

  }

}
