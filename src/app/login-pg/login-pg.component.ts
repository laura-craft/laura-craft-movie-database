import { JwtService } from './../jwt.service';
import { RestService } from './../rest.service';
import { NgForm } from '@angular/forms';
import { MovieApiService } from './../movie-api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login-pg',
  templateUrl: './login-pg.component.html',
  styleUrls: ['./login-pg.component.scss']
})
export class LoginPgComponent implements OnInit {
  public email: string = '';
  public password: string = '';
  public errorMsg: string = '';
  logIn=false;


  // public errorMsg: string = '';

  constructor(
    private movieApi: MovieApiService,
    private readonly rest: RestService,
    private readonly jwtService: JwtService,
    private router: Router) { }

  ngOnInit(): void {
  }

 onSubmit () {
   this.logIn = true;
   this.rest.logIn({
     email: this.email,
     password: this.password
   }).then(res => {
     if (res.error) {
       console.log('logIn', res)
       this.errorMsg = res.msg;
     } else {
       console.log('logIn', res)
       this.jwtService.setJwt(res.data);
      this.router.navigate(['/main-pg']);
  }
  });
 }}
