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
    return this.http.get('//18.222.167.189:8080/get-all-tickets', this.headers);
  }

  // save(car: any): Observable<any> {
  //   let result: Observable<Object>;

  //   result = this.http.post(this.TICKET_API + '/create', car, this.headers);

  //   return result;
  // }
  save(car: any): Observable<any> {
    let result: Observable<Object>;

    result = this.http.post('//18.222.167.189:8080/create-ticket', car, this.headers);

    return result;
  }
  // remove(href: number) {
  //   console.log(href);
  //   return this.http.delete(`${this.TICKET_API + '/delete-ticket'}/${'_id='}${href}`);

  // }


}
