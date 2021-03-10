import { UserLibraryComponent } from './user-library/user-library.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MainPgComponent } from './main-pg/main-pg.component';
import { LoginPgComponent } from './login-pg/login-pg.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: LoginPgComponent },
  { path: 'register-page', component: RegisterPageComponent},
  { path: 'main-pg', component: MainPgComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'movie-details', component: MovieDetailsComponent },
  { path: 'user-library', component: UserLibraryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
