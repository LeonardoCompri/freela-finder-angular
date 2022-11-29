import { Projeto } from './../services';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  serviceUrl: string = "http://localhost:8080";

  constructor(
    private _http: HttpClient
  ) { }

  public getProjetos() {
    return this._http.get<Projeto[]>(this.serviceUrl + "/projeto/");
  }

}
