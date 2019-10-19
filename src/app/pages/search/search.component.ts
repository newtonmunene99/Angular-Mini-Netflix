import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  value: string;
  results: any[];
  constructor(
    public movieService: MovieService,
    public afAuth: AngularFireAuth
  ) {}

  ngOnInit() {}

  search(query: string) {
    if (query.length > 0) {
      this.movieService.mdb
        .searchMovie({ query: query })
        .then(movies => {
          console.log(movies.results);
          this.results = movies.results;
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      this.results = [];
    }
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
