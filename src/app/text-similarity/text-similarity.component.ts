import {Component, OnInit} from '@angular/core';
import {TextSimilarityService} from "../services/text-similarity.service";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit{

  text1: string = '';
  text2: string = '';

  similarity: number = 0;
  langConfidence: number = 0;

  constructor(private textSimilarityService: TextSimilarityService){
  }

  ngOnInit(): void {
  }

  findSimilarityLevel(): void {
    this.textSimilarityService.getTextSimilarity(this.text1, this.text2).subscribe((result) => {
    this.similarity = result.similarity * 100;
    this.langConfidence = result.langConfidence * 100;
    // this.text1 = '';
    // this.text2 = '';
  })
  }

}
