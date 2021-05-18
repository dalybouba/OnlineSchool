import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Course } from '../shared/models/Course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  Url = 'http://localhost:3000/api/courses'
  constructor(
    private httpclient: HttpClient,
  ) {;
  }
  post(form: Course) {
    console.log(form)
    return this.httpclient.post<Course>(`${this.Url}`, form)
  }
  get(): Observable<Course> {
    return this.httpclient.get<Course>(`${this.Url}`)
  }
  getById(id: number): Observable<Course> {
    return this.httpclient.get<Course>(`${this.Url}/${id}`)
  }
  update( form: Course): Observable<Course> {
    console.log(form)
    return this.httpclient.put<Course>(`${this.Url}`, form)
  }
  delete(id: number): Observable<Course> {
    return this.httpclient.delete<Course>(`${this.Url}/${id}`)
  }
}
