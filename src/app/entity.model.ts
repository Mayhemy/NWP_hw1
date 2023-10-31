export interface ResponseEntityData {
  timestamp: string;
  time: number;
  lang: string;
  langConfidence?: number;
  text?: string;
  annotations: Annotation[];
  topEntities?: TopEntity[];
}

export interface Annotation {
  id: string;
  title: string;
  uri: string;
  label: string;
  confidence: number;
  spot: string;
  start: number;
  end: number;
  types?: string[];
  categories?: string[];
  abstract?: string;
  lod: {
    wikipedia: string;
    dbpedia: string;
  };
  alternateLabels?: string[];
  image?: {
    full: string;
    thumbnail: string;
  };
}

export interface TopEntity {
  id: string;
  uri: string;
  score: number;
}

export interface TextSimilarityResponse{
  timestamp: string;
  time: number;
  lang: string;
  langConfidence: number;
  similarity: number;
}

export interface LanguageDetectionResponse {
  timestamp: string;
  time: number;
  detectedLangs: DetectedLang[]
}

export interface DetectedLang{
  lang: string;
  confidence: number;
}

export interface SentimentAnalysisResponse {
  timestamp: string;
  time: number;
  lang: string;
  langConfidence: number;
  text : string;
  sentiment: Sentiment;
}

export class Sentiment {
  constructor(score: number, type: string) {
    this.score = score;
    this.type = type;
  }
  score: number;
  type: string ;
}

export class ApiRequest{
  constructor(date: Date, type: string, body: string) {
    this.date = date;
    this.type = type;
    this.body = body;
  }
  date : Date;
  type : string;
  body : string;
}
