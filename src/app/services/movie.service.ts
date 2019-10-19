import { Injectable } from "@angular/core";
import MovieDb from "moviedb-promise";
import { AngularFireAuth } from "@angular/fire/auth";
import { first } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class MovieService {
  public mdb = new MovieDb("4d51e2149ffec1e3fabb84a54d724b76", true);

  constructor(public afAuth: AngularFireAuth) {}

  public getUser(): Promise<firebase.User> {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
