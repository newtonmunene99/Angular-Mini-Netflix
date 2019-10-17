import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialComponentsModule } from "./material/material.module";
import { HomeComponent } from "./pages/home/home.component";
import { MovieComponent } from "./pages/movie/movie.component";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment.f";
@NgModule({
  declarations: [AppComponent, HomeComponent, MovieComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule // auth
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
