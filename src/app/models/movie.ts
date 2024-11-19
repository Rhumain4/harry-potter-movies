export interface Movie {
  id: string;
  title: string;
  duration: number;
  budget: number;
  release_date: string;
  box_office?: string;
  cinematographers?: string[];
  poster?: string;
  producers?: string[];
  summary?: string;
}