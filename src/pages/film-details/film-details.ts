import { EmailComposer } from '@ionic-native/email-composer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilmDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-film-details',
  templateUrl: 'film-details.html',
})
export class FilmDetailsPage {

  film: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {
    this.film = this.navParams.get('film');
  }

  // goBack() {
  //   this.navCtrl.pop();
  // }

 shareFilm() {
   let email = {
     to: 'sharbel.cosa@gmail.com',
     subject: 'I love this one:' + this.film.title,
     body: 'Can you remember how it goes? <br><br>\"' + this.film.opening_crawl + '\"',
     isHtml:true
   };

   this.emailComposer.open(email);
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmDetailsPage');
  }

}
