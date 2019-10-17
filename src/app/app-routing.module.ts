import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { MovieComponent } from "./pages/movie/movie.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "movie/:id", component: MovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
