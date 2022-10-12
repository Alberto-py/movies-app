import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  movieTile!: string;

  constructor() { }

  ngOnInit(): void {
  }

  buscarPeliculas(event: Event) {
    event.preventDefault();
  }
}
