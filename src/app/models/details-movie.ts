import { Movie } from './movie';

export interface DetailsMovie extends Movie {
  box_office: string;
  cinematographers: string[];
  poster: string;
  producers: string[];
  summary: string;
}
