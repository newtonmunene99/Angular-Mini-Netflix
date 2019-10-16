import { Injectable } from "@angular/core";
import MovieDb from "moviedb-promise";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  public mdb = new MovieDb("4d51e2149ffec1e3fabb84a54d724b76", true);
  constructor() {}
}
