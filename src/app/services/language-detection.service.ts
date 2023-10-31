import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiRequest, LanguageDetectionResponse, ResponseEntityData} from "../entity.model";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class LanguageDetectionService {

  private readonly apiUrl = environment.dandelionApi;
  constructor(private httpClient: HttpClient, private historyService:HistoryService) { }

  //f580e5ad50f34b9a83529c3a3db0def2
  detectLanguage(text: string, clean: boolean): Observable<LanguageDetectionResponse> {
    const apiToken = new ApiRequest(new Date(), "GET", `${this.apiUrl}/li/v1?text=${text}&clean=${clean? "true":"false"}&token=${localStorage.getItem('token')}`);
    this.historyService.addRequestToHistory(apiToken);
    const finalParams = new HttpParams().set('text', text).set('clean',clean? "true":"false").set('token',localStorage.getItem('token') ?? '');
    return this.httpClient.get<LanguageDetectionResponse>(`${this.apiUrl}/li/v1`, {params: finalParams});
  }
}
