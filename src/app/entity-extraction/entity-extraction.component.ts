import {Component, OnInit} from '@angular/core';
import {EntityExtractionService} from "../services/entity-extraction.service";
import {Annotation, ResponseEntityData} from "../entity.model";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit{

  text : string = "";
  min_confidence : number = 0.5;
  image : boolean = false;
  abstract : boolean = false;
  categories : boolean = false;
  result: Annotation[] = [];

  //token f580e5ad50f34b9a83529c3a3db0def2
  constructor(private entityExtractionService: EntityExtractionService) { }
  ngOnInit(): void {
  }

  extractEntities() {
    this.entityExtractionService.getEntity(this.text, this.min_confidence, this.parseParams()).subscribe((result) => {
      this.result = result.annotations;
    })
  }

  parseParams() {
    let params = "";
    if (this.image) {
      params += "image,";
    }
    if (this.abstract) {
      params += "abstract,";
    }
    if (this.categories) {
      params += "categories,";
    }

    return params.substring(0, params.length - 1);
  }
}
