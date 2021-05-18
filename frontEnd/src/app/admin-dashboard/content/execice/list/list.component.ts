import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExeciceService } from 'src/app/services/execice.service';
import { Execice } from 'src/app/shared/models/Execice.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  create: boolean;
  exercices: Execice;
  exercice: Execice = new Execice();
  validateForm: FormGroup;
  isVisible : boolean;
  id: any;
  constructor(
    private exerciceService: ExeciceService,
    private fb: FormBuilder,
  ) { }

  read(id: any) {
    this.exerciceService.getById(id).subscribe(res => { console.log(res) })

  }
  add() {
    this.create = true;
  }
  update(iD: any) {
    this.id = iD
    console.log(this.id)
    this.isVisible = true;
    this.exerciceService.getById(iD).subscribe(res => {
      this.exercice = res
      this.validateForm.patchValue({ _id: this.exercice._id, title: this.exercice.title, question: this.exercice.question,response:this.exercice.response })
    })
  }
  delete(id: any) {
    this.exerciceService.delete(id).subscribe(() => { this.getCouses() })
  }
  addRow() { }
  ngOnInit(): void {
    this.getCouses();
    this.validateForm = this.fb.group({
      _id: [''],
      title: ['', [Validators.required]],
      question: [''],
      response: [''],
    });
  }
  getCouses() {
    this.exerciceService.get().subscribe(
      res => {
        this.exercices = res
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
    this.exerciceService.update(this.validateForm.value).subscribe(res => { this.getCouses() })
  }

  refresh($: any) {
    this.getCouses()
    this.create = $
  }

}
