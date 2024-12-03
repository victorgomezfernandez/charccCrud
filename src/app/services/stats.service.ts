import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  endpoint = "http://localhost:8080/api/charcc/stats"

  constructor(private httpClient : HttpClient) { }

  getStats(){
    return this.httpClient.get(this.endpoint);
  }

}
