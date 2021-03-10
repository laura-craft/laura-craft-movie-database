import { RestService } from './../rest.service';
import { JwtService } from './../jwt.service';

import { Router } from '@angular/router';
import { MovieApiService } from '../movie-api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movieDetails',
  templateUrl: './movie-Details.component.html',
  styleUrls: ['./movie-Details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public loggedIn: boolean = false;
  public movieDetails;
  public movieSaved: boolean;
  public userLibrary;



  constructor(
    private movieApi: MovieApiService,
    private readonly router: Router,
    private readonly jwtService: JwtService,
    private readonly restService: RestService) { }

  ngOnInit(): void {
    this.movieDetails = this.movieApi.movieDetails;
    if (this.jwtService.getJwt()) {
      this.loggedIn = true;
      this.userLibrary = this.restService.userLibrary;
      for (let i = 0; i < this.userLibrary.length; i++){
        console.log(this.userLibrary[i].movieDetails.imdbID);
        console.log('movieDetails here', this.movieDetails.imdbID);
        if (this.userLibrary[i].imdbID == this.movieDetails.imdbID) {
          this.movieSaved = true;
        } else {
          this.movieSaved = false;
        }
      }
      console.log('movie-details', this.userLibrary);
    }
    console.log(this.movieDetails);
  }
 onSubmit(){
    this.restService.saveMovie({
      imdbID: this.movieDetails.imdbID,
      title: this.movieDetails.title,
      poster: this.movieDetails.poster,
      // this.router.navigate(['/user-library']);
    });
    this.movieSaved = true;
  }

}
