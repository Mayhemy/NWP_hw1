import {Component, OnInit} from '@angular/core';
import {LanguageDetectionService} from "../services/language-detection.service";
import {DetectedLang} from "../entity.model";

@Component({
  selector: 'app-languge-detection',
  templateUrl: './languge-detection.component.html',
  styleUrls: ['./languge-detection.component.css']
})
export class LangugeDetectionComponent implements OnInit{

  text : string = "";
  clean: boolean = false;
  detectedLanguages: DetectedLang[] = [];
  constructor(private languageDetectionService : LanguageDetectionService) { }

  ngOnInit(): void {
  }
  detectLanguage(): void {
    this.languageDetectionService.detectLanguage(this.text,this.clean).subscribe((result) => {
      this.detectedLanguages = result.detectedLangs;
    })
  }
}
