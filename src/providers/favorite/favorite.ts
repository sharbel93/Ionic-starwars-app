import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'favoriteFilms';

/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

/*
To favorite a film, we need to retrieve the list of all films already inside the storage and then either add the film or set a completely new object if nothing is there yet.
*/

/*
To remove a film we use more or less the same logic, but now we get the index of our film inside the array and call the splice method to remove it from the array before we save it back.
*/

/*
If we just want to check whether a film is already stored we retrieve the array and check if the key can be found inside.
*/
@Injectable()
export class FavoriteProvider {


  constructor(public storage: Storage) {
  }

  getAllFavoriteFilms() {
    return this.storage.get(STORAGE_KEY);
  }

  isFavorite(filmId){
    return this.getAllFavoriteFilms().then(result => {
       return result && result.indexOf(filmId) !== -1;
    });
  }

  favoriteFilm(filmId) {
    return this.getAllFavoriteFilms().then(result => {
      if(result) {
        result.push(filmId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [filmId]);
      }
    });
  }

  unfavoriteFilm(filmId){
    return this.getAllFavoriteFilms().then(result => {
      if(result) {
        var index = result.indexOf(filmId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

}
