import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/models/response';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  prefix = 'category';

  constructor(private http: HttpClient) { }

  method(): Observable<Response> {
    return this.http.get(`${environment.api}`) as Observable<Response>;
  }
}
