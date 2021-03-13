import { Router } from '@angular/router';
import { MovieApiService } from './../movie-api.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-main-pg',
  templateUrl: './main-pg.component.html',
  styleUrls: ['./main-pg.component.scss']
})
export class MainPgComponent implements OnInit {
searchResult;
searchResultArray: [];


  constructor(private movieApi:MovieApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onSearch(input: string) {
      this.movieApi.movieApiTitle(input).subscribe((data)=> {
      this.searchResult = data
      // this.searchResultArray = this.searchResult.Search
      this.movieApi.movieSearchArray = this.searchResult.Search
      console.log(this.searchResultArray);
      console.log(this.router);
      this.router.navigate(['search-results']);
    });


      }
    }
