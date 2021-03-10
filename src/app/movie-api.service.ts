import { Secrets } from '.secrets/secrets';
import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  movieSearchArray: [];
  movieDetails;

  constructor(private http: HttpClient) { }

  movieApiTitle(input: string){
    return this.http.get(
      'https://movie-database-imdb-alternative.p.rapidapi.com',
{

    headers: {
	  "x-rapidapi-key": Secrets.APIKEY,
	  "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
	  useQueryString: 'true'
  },
  params: {
    s: input,
    r: 'json'

      }

  });
  }
  movieSearch(Input: string) {
    return this.http.get(
      'https://movie-database-imdb-alternative.p.rapidapi.com/',
    {

      headers: {
	    "x-rapidapi-key": Secrets.APIKEY,
	    "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
	    useQueryString : 'true'
      },
      params: {
        i: Input,
        r: 'json',

      }

});

    }
}


// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });
// }
