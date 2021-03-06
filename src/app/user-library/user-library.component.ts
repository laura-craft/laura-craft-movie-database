import { Movie } from './../movie.interface.ts/movie.interface';
import { MovieApiService } from './../movie-api.service';
import { Router } from '@angular/router';
import { JwtService } from './../jwt.service';
import { RestService } from './../rest.service';
import { Component, OnInit, Input } from '@angular/core';




@Component({
  selector: 'app-user-library',
  templateUrl: './user-library.component.html',
  styleUrls: ['./user-library.component.scss']
})
export class UserLibraryComponent implements OnInit {
  public movieDetails: [] = [];
  public userLibrary: []=[];
  public loggedIn: boolean = false;
  public saveMovie: boolean;


  constructor(
    private readonly router: Router,
    private readonly restService: RestService,
    private readonly jwtService: JwtService,
    private readonly movieApi: MovieApiService) { }

  ngOnInit(): void {


    this.restService.getMovie().then((res)=> {
      console.log(res.data);
    this.userLibrary = res.data;

    });
  }

  getMovieDetails(id) {
  this.movieApi.movieSearch(id).subscribe((desc) => {
  this.movieApi.movieDetails = desc;
  //  this.router.navigate(['movie-details'])
  })
}

  movieSearch(Input: string) {
    this.movieApi.movieSearch(Input).subscribe((data) => {
      this.movieApi.movieDetails = data;
      // this.router.navigate(['movie-details/', id]);

    });
  }

  movieApiTitle(Input: string) {
    this.movieApi.movieApiTitle(Input).subscribe((data) => {
      this.movieApi.movieDetails = data;


    });
  }


onDelete(imdbID) {
  this.restService.deleteMovie(imdbID);
  this.restService.getMovie().then((res)=> {
  this.userLibrary = res.data;
  this.saveMovie = false;
  }
  )
}
}
