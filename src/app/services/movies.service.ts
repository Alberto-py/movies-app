import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  urlBase = 'https://movies-app1.p.rapidapi.com/api';
  headers = {
    'X-RapidAPI-Key': 'ac2bc4be14msh253e8d43576e6a4p175fa0jsn74166d2a2c72',
    'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
  };

  constructor(private http: HttpClient) { }

  buscarPeliculas(titulo: string): Observable<any> {
    return this.http.get(this.urlBase + '/movies',
    {headers: this.headers, params: {query: titulo}})
    .pipe(map((resp: any)=> resp.results))
  };

  buscarPeliculaId(movieId: string): Observable<any> {
    return this.http.get(this.urlBase + '/movie' + '/' + movieId, 
    {
      headers: this.headers
    })
    .pipe(map((resp: any)=> resp.result))
  };

  buscarGeneros(): Observable<any> {
    return this.http.get(this.urlBase + '/genres', 
    {headers: this.headers})
    .pipe(map((resp: any)=> resp.results))
  };

  buscar(): Observable<any> {
    return this.http.get(this.urlBase + '/movies', 
    {headers: this.headers})
    .pipe(map((resp: any)=> resp.results))
  };
}