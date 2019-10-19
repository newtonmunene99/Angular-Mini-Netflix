import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { MovieService } from "src/app/services/movie.service";

@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.component.html",
  styleUrls: ["./favourites.component.scss"]
})
export class FavouritesComponent implements OnInit {
  private favouritesCollection: AngularFirestoreCollection<any>;
  favourites: any[];

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    public movieService: MovieService
  ) {}

  getFavourites() {
    const favouritedMovies = [];
    this.movieService
      .getUser()
      .then(user => {
        this.favouritesCollection = this.afs.collection<any>(
          `users/${user.uid}/favourites`
        );

        this.favouritesCollection.valueChanges().subscribe(
          movies => {
            for (const movie of movies) {
              this.movieService.mdb
                .movieInfo({ id: movie.movieid })
                .then(movieInfo => {
                  favouritedMovies.push(movieInfo);
                })
                .catch(error => {
                  console.error(error);
                });
            }

            this.favourites = favouritedMovies;
          },
          error => {
            console.error(error);
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  ngOnInit() {
    this.getFavourites();
  }

  stringToDate(date: string): Date {
    return new Date(date);
  }
}
