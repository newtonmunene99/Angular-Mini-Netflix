import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { MovieComponent } from "./pages/movie/movie.component";
import { FavouritesComponent } from "./pages/favourites/favourites.component";
import { SearchComponent } from "./pages/search/search.component";
import {
  redirectUnauthorizedTo,
  AngularFireAuthGuard
} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo([""]);
const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "movie/:id",
    component: MovieComponent
  },
  {
    path: "favourites",
    component: FavouritesComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  { path: "search", component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
