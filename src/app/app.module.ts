import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { EntityExtractionComponent } from './entity-extraction/entity-extraction.component';
import { TextSimilarityComponent } from './text-similarity/text-similarity.component';
import { LangugeDetectionComponent } from './languge-detection/languge-detection.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { HistoryComponent } from './history/history.component';
import { RequestPipe } from './pipes/request.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntityExtractionComponent,
    TextSimilarityComponent,
    LangugeDetectionComponent,
    SentimentAnalysisComponent,
    HistoryComponent,
    RequestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
