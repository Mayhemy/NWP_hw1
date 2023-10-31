import { Injectable } from '@angular/core';
import {ApiRequest} from "../entity.model";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  apiRequests: ApiRequest[] = [];
  constructor() { }

  addRequestToHistory(apiRequest : ApiRequest): void {
    this.apiRequests.push(apiRequest);
  }

  getHistory(): ApiRequest[] {
    return this.apiRequests;
  }
}
