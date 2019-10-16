import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  page = 1;
  constructor(public movieService: MovieService) {}

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
        console.log(response);
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
}
