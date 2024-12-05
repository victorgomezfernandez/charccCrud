import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  endpoint = "http://localhost:8080/api/charcc/characters"

  constructor(private httpClient : HttpClient) { }

  createCharacter(): Observable<any> {
    return this.httpClient.post(this.endpoint, {});
  }

  getCharacters(): Observable<any> {
    return this.httpClient.get<any>(this.endpoint);
  }
}
