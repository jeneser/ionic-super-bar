import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { Page1Page } from '../pages/page1/page1';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage, icon: 'md-cube' },
      { title: 'page1', component: Page1Page, icon: 'md-cube' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
