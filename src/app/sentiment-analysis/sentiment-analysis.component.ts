import {Component, OnInit} from '@angular/core';
import {LanguageDetectionService} from "../services/language-detection.service";
import {SentimentAnalysisService} from "../services/sentiment-analysis.service";
import {Sentiment} from "../entity.model";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit{

  text : string = "";
  textSentiment: Sentiment;
  lang: string = "en";
  sentimentColor : string = "";
  constructor(private sentimentAnalysisService : SentimentAnalysisService) {
    this.textSentiment = new Sentiment(0,"");
  }

  ngOnInit(): void {

  }

  calculateSentiment(): void {
    this.sentimentAnalysisService.getSentiment(this.text,this.lang).subscribe((result) => {
      this.textSentiment = new Sentiment(result.sentiment.score,result.sentiment.type);
      this.calculateColor();
    })
  }

  calculateColor(){
    const red = 1 + (0 - 1) * (this.textSentiment.score + 1)/2 ;
    const green = (1) * (this.textSentiment.score + 1)/2 ;
    const blue= 0;
    this.sentimentColor = `rgb(${red*255}, ${green*255}, ${blue*255})`;
    console.log(`rgb(${red}, ${green}, ${blue})`);
  }
}
