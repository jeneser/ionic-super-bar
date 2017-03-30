import {Component, ChangeDetectorRef, ViewChild} from '@angular/core';
import { NavController, Content } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1Page {

  @ViewChild(Content) content: Content;
  showToolbar:boolean = false;
  articles:Array<any> = new Array(10).fill('');

  pushPage: any;

  constructor(public navCtrl: NavController,
              public ref: ChangeDetectorRef,) {
  }

  onScroll($event: any){

      let scrollTop = $event.scrollTop;
      this.showToolbar = scrollTop >= 120;
      this.ref.detectChanges();

  }

}
