import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  public API = '//localhost:8080';
  public TICKET_API = this.API + '/ticket';

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.TICKET_API + '/getAll', this.headers);
  }

  save(car: any): Observable<any> {
    let result: Observable<Object>;

    result = this.http.post(this.TICKET_API + '/create', car, this.headers);

    return result;
  }
  remove(href): Observable<any> {
    return this.http.delete(this.TICKET_API + '/delete-ticket', href);
  }
}
