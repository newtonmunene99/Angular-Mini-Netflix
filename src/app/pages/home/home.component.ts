import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  page = 1;
  constructor(
    public movieService: MovieService,
    public afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.discoverMovies(this.page);
  }

  discoverMovies(page: number = 1) {
    this.movieService.mdb
      .discoverMovie({
        page: `${page}`,
        include_video: "false",
        include_adult: "false",
        sort_by: "popularity.desc",
        language: "en-US"
      })
      .then(response => {
        if (response.page == 1) {
          this.movies = response.results;
        } else {
          this.movies = [...this.movies, response.results];
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  stringToDate(date: string): Date {
    return new Date(date);
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
