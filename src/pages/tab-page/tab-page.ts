import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the TabPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tab-page',
  templateUrl: 'tab-page.html'
})
export class TabPagePage {

  showToolbar:boolean = true;
  articles:Array<any> = new Array(15).fill('');

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ref:ChangeDetectorRef) {}

  onScroll($event) {
    console.log(2);
    let scrollTop = $event.scrollTop;
    scrollTop > 120 ? this.showToolbar = false : this.showToolbar = true;
    // this.showToolbar = scrollTop >= 120;
    this.ref.detectChanges();
  }

}
