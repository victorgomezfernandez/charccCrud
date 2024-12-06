import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  endpoint = "http://localhost:8080/api/charcc/stats"

  constructor(private httpClient: HttpClient) {
  }

}
