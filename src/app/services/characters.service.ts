import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  endpoint = "http://localhost:8080/api/charcc/characters"

  constructor(private httpClient : HttpClient) { }

  getCharacters(){
    return this.httpClient.get(this.endpoint);
  }
}
