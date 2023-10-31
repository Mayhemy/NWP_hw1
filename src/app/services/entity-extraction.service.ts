import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ApiRequest, ResponseEntityData} from "../entity.model";
import {Observable} from "rxjs";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class EntityExtractionService {

  private readonly apiUrl = environment.dandelionApi;
  constructor(private httpClient: HttpClient,private historyService:HistoryService) { }

  //f580e5ad50f34b9a83529c3a3db0def2
  getEntity(text: string, min_confidence: number, params: string): Observable<ResponseEntityData> {
    const apiToken = new ApiRequest(new Date(), "GET", `${this.apiUrl}/nex/v1?text=${text}&min_confidence=${min_confidence}&include=${params}&token=${localStorage.getItem('token')}`);
    this.historyService.addRequestToHistory(apiToken);
    const finalParams = new HttpParams().set('text', text).set('min_confidence', min_confidence.toString()).set('include', params).set('token',localStorage.getItem('token') ?? '');
    return this.httpClient.get<ResponseEntityData>(`${this.apiUrl}/nex/v1`, {params: finalParams});
  }
}
