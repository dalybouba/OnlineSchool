import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Execice } from '../shared/models/Execice.model';

@Injectable({
  providedIn: 'root'
})
export class ExeciceService {

  Url = 'http://localhost:3000/api/execices'

  constructor(
    private httpclient: HttpClient,
  ) {
  }
  post(form: Execice) {
    console.log(form)
    return this.httpclient.post<Execice>(`${this.Url}`, form)
  }
  get(): Observable<Execice> {
    return this.httpclient.get<Execice>(`${this.Url}`)
  }
  getById(id: number): Observable<Execice> {
    return this.httpclient.get<Execice>(`${this.Url}/${id}`)
  }
  update( form: Execice): Observable<Execice> {
    console.log(form)
    return this.httpclient.put<Execice>(`${this.Url}`, form)
  }
  delete(id: number): Observable<Execice> {
    return this.httpclient.delete<Execice>(`${this.Url}/${id}`)
  }
}
