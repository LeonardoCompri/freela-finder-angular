import { Projeto } from 'src/app/services/services';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjetcsService {

  serviceUrl: string = "http://localhost:8080";

  constructor(
    private _http: HttpClient
  ) { }

  public getProjetcs() {
    return this._http.get<Projeto[]>(this.serviceUrl + "/projeto/");
  }
}
