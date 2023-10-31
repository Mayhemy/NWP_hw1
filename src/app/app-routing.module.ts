import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LangugeDetectionComponent} from "./languge-detection/languge-detection.component";
import {EntityExtractionComponent} from "./entity-extraction/entity-extraction.component";
import {SentimentAnalysisComponent} from "./sentiment-analysis/sentiment-analysis.component";
import {TextSimilarityComponent} from "./text-similarity/text-similarity.component";
import {HistoryComponent} from "./history/history.component";
import {tokenGuard} from "./token.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canDeactivate: [tokenGuard]
  },
  {
    path: "entity-extraction",
    component: EntityExtractionComponent
  },
  {
    path: "language-detection",
    component: LangugeDetectionComponent
  },
  {
    path: "sentiment-analysis",
    component: SentimentAnalysisComponent,
  },
  {
    path: "text-similarity",
    component: TextSimilarityComponent,
  },
  {
    path: "history",
    component: HistoryComponent,
  }
  // {
  //   path: "posts/:id",
  //   component: SinglePostComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
