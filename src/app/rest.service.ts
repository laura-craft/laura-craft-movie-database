import { JwtService } from './jwt.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class RestService {
  public userLibrary;

  constructor(private readonly http: HttpClient, private readonly jwtService: JwtService) { }

  register(body): Promise<any> {
    return this.http
    .post(`${environment.apiUrl}/register`, body)
    .toPromise()
  }

  logIn(body): Promise<any> {
    return this.http
    .post(`${environment.apiUrl}/log-in`, body)
    .toPromise()
  }

  getMovie():  Promise<any> {
    const jwt = this.jwtService.getJwt();
    return this.http
    .get(`${environment.apiUrl}/userLibrary`, {
      headers: {
        Authorization: `Bearer ${jwt}`, 'Access-Control-Allow-Origin': '*',
      },
    })
    .toPromise();

  }

  saveMovie(body): Promise<any> {
    const jwt = this.jwtService.getJwt();
    return this.http
    .put(`${environment.apiUrl}/save`, body, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .toPromise();

  }

deleteMovie(id): Promise<any> {
    const jwt = this.jwtService.getJwt();
    return this.http
    .delete(`${environment.apiUrl}/delete-movie/${id}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .toPromise();

  }
}
