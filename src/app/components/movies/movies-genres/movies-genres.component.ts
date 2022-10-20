import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-movies-genres',
  templateUrl: './movies-genres.component.html',
  styleUrls: ['./movies-genres.component.css']
})
export class MoviesGenresComponent implements OnInit {

  genres!: any[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.buscarGeneros().subscribe(response => {
      this.genres = response;
    })
  }

}
