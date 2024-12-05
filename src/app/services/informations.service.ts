import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InformationsService {

  endpoint = "http://localhost:8080/api/charcc/informations"

  constructor(private httpClient : HttpClient) { }

  getInformations(){
    return this.httpClient.get(this.endpoint);
  }

  saveInformation(data: any) {
    return this.httpClient.post(`${this.endpoint}`, data);
  }

  updateInformation(id: number, data: any): Observable<any> {
    return this.httpClient.put<any>(`${this.endpoint}/${id}`, data);
  }

  getInformationById(characterId: number) {
    return this.httpClient.get(`${this.endpoint}/${characterId}`);
  }

}
