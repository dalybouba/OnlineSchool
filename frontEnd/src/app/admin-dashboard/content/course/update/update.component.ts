import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/shared/models/Course.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 
 id: any;
 edit: boolean;
  course: Course = new Course();
  validateForm: FormGroup
  constructor(
    private courseService: CourseService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(){
console.log(this.id,this.edit)
if (this.edit == true) {
  this.courseService.getById(this.id).subscribe(res => {
    this.course = res
    console.log(this.course); 
  })
}
console.log("/////",this.id,this.edit)
    this.validateForm = this.fb.group({
      _id: [this.course._id],
      title: [this.course.title, [Validators.required]],
      content: [this.course.content],
    });
    this.validateForm.patchValue({ _id: this.course._id, title: this.course.title, content: this.course.content })
   
  }
  handleOk(): void {
    this.edit = false;
  }

  handleCancel(): void {
    this.edit = false;
  }


  getById(): void {
    this.courseService.getById(this.id).subscribe(res => {
      this.course = res
      this.validateForm.patchValue({ _id: this.course._id, title: this.course.title, content: this.course.content })
    })
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.courseService.update(this.validateForm.value).subscribe(()=>{})
  }
}
