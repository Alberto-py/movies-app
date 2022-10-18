import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { MoviesComponent } from './components/movies/movies/movies.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'movie',
        component: MoviesListComponent
    },
    {
        path: 'movie/:movieId',
        component: MovieDetailsComponent
    },
    {
        path: 'movies',
        component: MoviesComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}