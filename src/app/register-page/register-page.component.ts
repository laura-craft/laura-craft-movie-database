import { JwtService } from './../jwt.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { RestService } from './../rest.service';



@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public errorMsg: string = '';

  public registerForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly rest: RestService,
    private readonly jwtService: JwtService,
    private readonly router: Router
    ) {
    this.registerForm = this.fb.group({
      email:[null,[]],
      fname: [null, []],
      lname: [null, []],
      password: [null, []]
    });
   }

  ngOnInit(): void {
  }

  register() {
    this.rest.register(this.registerForm.value).then(res => {
      if (res.error) {
        this.errorMsg = res.msg;


      } else {

        this.jwtService.setJwt(res.data);
        this.router.navigate(['/main-pg']);
      }
    });
  }

}
