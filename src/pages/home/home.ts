import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ScrollerComponent } from '../../components/scroller/scroller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
