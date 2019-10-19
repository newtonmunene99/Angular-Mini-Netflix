# AngularMiniNetflix

[https://angular-mini-netflix.netlify.com/](https://angular-mini-netflix.netlify.com/)

## Prereq

1. Create a new firebase project and replace the values in `src/environments/environment.copy.ts` and `src/environments/environment.prod.copy.ts` with your own.
2. Remove *.copy* from both files so that it's `src/environments/environment.ts` and `src/environments/environment.prod.ts`
3. Get your own api key from [The Movie Db](https://www.themoviedb.org/settings/api) and replace the one in `src/app/services/movie.service.ts`

### To run locally

1. Clone this repo
2. cd into the repo
3. run `npm i`
4. run `ng serve --open=true`
