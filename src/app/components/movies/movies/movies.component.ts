import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies!: any[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.buscar().subscribe(response => {
      this.movies = response;
    })
  }

}
