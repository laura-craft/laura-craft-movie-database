import { MovieApiService } from './../movie-api.service';
import { Router } from '@angular/router';
import { JwtService } from './../jwt.service';
import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-user-library',
  templateUrl: './user-library.component.html',
  styleUrls: ['./user-library.component.scss']
})
export class UserLibraryComponent implements OnInit {
  public movieDetails;
  userLibrary: []= [];
  public saveMovie: boolean;

  constructor(
    private readonly router: Router,
    private readonly restService: RestService,
    private readonly jwtService: JwtService,
    private readonly movieApi: MovieApiService) { }

  ngOnInit(): void {
    this.restService.getMovie().then((res)=> {
    this.userLibrary = res.data;
    this.movieDetails = this.movieApi.movieDetails;
    console.log(this.movieDetails);

  });
}
  movieApiTitle(id: string) {
    this.movieApi.movieApiTitle(id).subscribe((data) => {
      this.movieApi.movieDetails = data;
      this.router.navigate(['movie-details/', id]);

    });
  }


onDelete(id) {
  this.restService.deleteMovie(id);
  this.saveMovie = false;
  // this.movieDetails = false;
}
}
