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

  getStats() {
    return this.httpClient.get(this.endpoint);
  }

  saveStats(data: any): Observable<any> {
    return this.httpClient.post(this.endpoint, data);
  }

  updateStats(id: number, data: any): Observable<any> {
    return this.httpClient.put<any>(`${this.endpoint}/${id}`, data);
  }

  getStatsByCharacterId(characterId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.endpoint}?character_id=${characterId}`);
  }

}
