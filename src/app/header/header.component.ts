import { JwtService } from './../jwt.service';
import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false

  constructor(private readonly router: RouterModule, public readonly jwtService: JwtService) { }

  ngOnInit(): void {
  }
  toggleNavBar(){
    this.navbarOpen=!this.navbarOpen
  }

onLogout() {
  this.jwtService.removeJwt();
}

}
