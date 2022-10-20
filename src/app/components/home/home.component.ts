import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  year = new Date().getFullYear();
  movies!: any[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.buscar().subscribe(response => {
      this.movies = response;
    })
  }

}
