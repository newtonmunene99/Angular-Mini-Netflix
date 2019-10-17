import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "src/app/services/movie.service";
@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  movieId: string;
  movieInfo: any;
  movieCast: any[];
  constructor(
    private route: ActivatedRoute,
    public movieService: MovieService
  ) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.params.id;
    console.log(this.movieId);
    this.getMovieDetails();
    this.getMovieCast();
  }

  getMovieDetails() {
    this.movieService.mdb
      .movieInfo({ id: this.movieId })
      .then(response => {
        console.log(response);
        this.movieInfo = response;
      })
      .catch(error => {
        console.error(error);
      });
  }

  getMovieCast() {
    this.movieService.mdb
      .movieCredits({ id: this.movieId })
      .then(response => {
        console.log(response);
        this.movieCast = response.cast;
      })
      .catch(error => {
        console.error(error);
      });
  }
}
