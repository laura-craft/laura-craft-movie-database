import { MovieApiService } from './../movie-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  movieSearchArray = [];


  constructor(private movieApi: MovieApiService, private router: Router) { }

  ngOnInit(): void {
    this.movieSearchArray = this.movieApi.movieSearchArray;
    console.log(this.movieSearchArray);
  }

getMovieDetails(id) {
  this.movieApi.movieSearch(id).subscribe((desc) => {
  this.movieApi.movieDetails = desc;
   this.router.navigate(['movie-details'])
  })
}

}
