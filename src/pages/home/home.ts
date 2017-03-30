import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';

import { NavController, MenuController, Content } from 'ionic-angular';

import { Page1Page } from '../page1/page1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  @ViewChild(Content) content: Content;

  pushPage: any;
  showToolbar:boolean = false;
  articles:Array<any> = new Array(10).fill('');

  constructor(public navCtrl: NavController,
              menu: MenuController,
              public ref: ChangeDetectorRef) {

    this.pushPage = Page1Page;
  }

  onScroll($event: any){
    let scrollTop = $event.scrollTop;
    this.showToolbar = scrollTop >= 120;
    this.ref.detectChanges();
  }

}
