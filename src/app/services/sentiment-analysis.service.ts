import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {HistoryService} from "./history.service";
import {Observable} from "rxjs";
import {ApiRequest, LanguageDetectionResponse, SentimentAnalysisResponse} from "../entity.model";

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {
  private readonly apiUrl = environment.dandelionApi;
  constructor(private httpClient: HttpClient, private historyService:HistoryService) { }

  getSentiment(text: string, lang:  string): Observable<SentimentAnalysisResponse> {
    if(lang === ''){
      const apiToken = new ApiRequest(new Date(), "GET", `${this.apiUrl}/sent/v1?text=${text}&token=${localStorage.getItem('token')}`);
      this.historyService.addRequestToHistory(apiToken);
      const finalParams = new HttpParams().set('text', text).set('token',localStorage.getItem('token') ?? '');
      return this.httpClient.get<SentimentAnalysisResponse>(`${this.apiUrl}/sent/v1`, {params: finalParams});
    }else{
      const apiToken = new ApiRequest(new Date(), "GET", `${this.apiUrl}/sent/v1?text=${text}&lang=${lang}&token=${localStorage.getItem('token')}`);
      this.historyService.addRequestToHistory(apiToken);
      const finalParams = new HttpParams().set('text', text).set('lang', lang).set('token',localStorage.getItem('token') ?? '');
      return this.httpClient.get<SentimentAnalysisResponse>(`${this.apiUrl}/sent/v1`, {params: finalParams});
    }
  }
}
