import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies!: any[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.buscarPeliculas('iron man').subscribe(response => {
      this.movies = response;
    })
  }

}
