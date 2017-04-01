import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabPagePage } from '../tab-page/tab-page';
/*
  Generated class for the Page2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2Page {

  showToolbar:Boolean = true;
  rootPage = TabPagePage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ref: ChangeDetectorRef) {}

  onScroll($event) {
  console.log(1);
    let scrollTop = $event.scrollTop;
    scrollTop > 120 ? this.showToolbar = false : this.showToolbar = true;
    // this.showToolbar = scrollTop >= 120;
    this.ref.detectChanges();
  }

}
