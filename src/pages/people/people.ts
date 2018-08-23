import { Observable } from 'rxjs/Observable';
import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {

  peoples: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.peoples = this.apiProvider.getPeople();
    this.peoples.subscribe(data => { console.log('people: ', data)});
  }

openPeopleDetails(people) {
  this.navCtrl.push('PeopleDetailsPage', {people: people});
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeoplePage');
  }

}
