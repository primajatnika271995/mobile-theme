import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Toast } from 'ionic-native';
import { TabsService } from '../../services/tabs-service';

@IonicPage()
@Component({
  templateUrl: 'tab-page-13.html',
  providers: [TabsService]
})
export class TabPage13 {
  params: any;

  constructor(private tabsService: TabsService) {
    this.tabsService.load("tab13").subscribe(snapshot => {
      this.params = snapshot;
    });
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.params = changes['data'].currentValue;
  }

  onItemClick(item:any) {
    if (window.location.hostname === "localhost") {
        console.log("Get");
    } else {
        Toast.show("Get", '1000', 'bottom').subscribe(toast => { });
    }
  }
}
