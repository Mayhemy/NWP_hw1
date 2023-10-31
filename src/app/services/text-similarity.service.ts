import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiRequest, LanguageDetectionResponse, ResponseEntityData, TextSimilarityResponse} from "../entity.model";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {
  private readonly apiUrl = environment.dandelionApi;
  constructor(private httpClient: HttpClient,private historyService:HistoryService) { }

  //f580e5ad50f34b9a83529c3a3db0def2
  getTextSimilarity(text1: string, text2: string): Observable<TextSimilarityResponse> {
    const apiToken = new ApiRequest(new Date(), "GET", `${this.apiUrl}/sim/v1?text1=${text1}&text2=${text2}&token=${localStorage.getItem('token')}`);
    this.historyService.addRequestToHistory(apiToken);
    const finalParams = new HttpParams().set('text1', text1).set('text2',text2).set('token',localStorage.getItem('token') ?? '');
    return this.httpClient.get<TextSimilarityResponse>(`${this.apiUrl}/sim/v1`, {params: finalParams});
  }
}
