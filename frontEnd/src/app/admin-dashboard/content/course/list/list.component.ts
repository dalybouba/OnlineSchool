import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/shared/models/Course.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  create: boolean;
  courses: Course;
  course: Course = new Course();
  validateForm: FormGroup;
  isVisible : boolean;
  id: any;
  constructor(
    private courseService: CourseService,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  read(id: any) {
    this.courseService.getById(id).subscribe(res => { console.log(res) })

  }
  add() {
    this.create = true;
  }
  update(iD: any) {
    this.id = iD
    this.isVisible = true;
    this.courseService.getById(iD).subscribe(res => {
      this.course = res
      this.validateForm.patchValue({ _id: this.course._id, title: this.course.title, content: this.course.content })
    })
  }
  delete(id: any) {
    this.courseService.delete(id).subscribe(() => { this.getCouses() })
  }
  addRow() { }
  ngOnInit(): void {
    this.getCouses();
    this.validateForm = this.fb.group({
      _id: [''],
      title: ['', [Validators.required]],
      content: [''],
    });
  }
  getCouses() {
    this.courseService.get().subscribe(
      res => {
        this.courses = res
      }
    )
  }
  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.courseService.update(this.validateForm.value).subscribe(res => { this.getCouses() })
  }

  refresh($: any) {
    this.getCouses()
    this.create = $
  }
}
