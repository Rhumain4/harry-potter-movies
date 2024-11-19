import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsMovie } from '../models/details-movie';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('/movies');
  }

  public getDetailsMovie(movieId: string): Observable<DetailsMovie> {
    return this.http.get<DetailsMovie>('/movies/' + movieId);
  }
}
