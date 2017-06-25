import { Component, ChangeDetectorRef } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-language-details',
  templateUrl: 'language-details.html'
})
export class LanguageDetailsPage {

  item;
  showToolbar:boolean = false;

  constructor(params: NavParams, public ref: ChangeDetectorRef) {
    this.item = params.data.item;
  }

  onScroll($event: any){
    let scrollTop = $event.scrollTop;
    this.showToolbar = scrollTop >= 80;
    this.ref.detectChanges();
  }

}
