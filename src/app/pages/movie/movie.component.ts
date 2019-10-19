import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "src/app/services/movie.service";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  movieId: string;
  movieInfo: any;
  movieCast: any[];
  uid: string;
  user: firebase.User;
  private movieDoc: AngularFirestoreDocument<any>;
  movie: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    public movieService: MovieService,
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.params.id;

    this.getMovieDetails();
    this.getMovieCast();
    this.checkFavouriteStatus();
  }

  checkFavouriteStatus() {
    this.movieService
      .getUser()
      .then(user => {
        this.user = user;
        this.movieDoc = this.afs.doc(
          `users/${user.uid}/favourites/${this.movieId}`
        );
        this.movie = this.movieDoc.valueChanges();
      })
      .catch(error => {});
  }

  getMovieDetails() {
    this.movieService.mdb
      .movieInfo({ id: this.movieId })
      .then(response => {
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
        this.movieCast = response.cast;
      })
      .catch(error => {
        console.error(error);
      });
  }

  addToFavourites() {
    this.afs
      .collection(`users/${this.user.uid}/favourites`)
      .doc(this.movieId)
      .set({ movieid: this.movieId })
      .then(response => {})
      .catch(error => {
        console.error(error);
      });
  }

  removeFromFavourites() {
    this.movieDoc.delete();
  }
}
