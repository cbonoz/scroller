import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {NativePageTransitions, NativeTransitionOptions} from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      let options: NativeTransitionOptions = {
        direction: 'up',
        duration: 500,
        slowdownfactor: 3,
        slidePixels: 20,
        iosdelay: 100,
        androiddelay: 150,
        winphonedelay: 250,
        fixedPixelsTop: 0,
        fixedPixelsBottom: 60
      };

      let onSuccess = () => { console.log('page transition success')};
      let onError = () => { console.log('page transition error')};

      NativePageTransitions.slide(options)
        .then(onSuccess)
        .catch(onError);      

    });
  }
}
