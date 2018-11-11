import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Toast } from 'ionic-native';
import { TabsService } from '../../services/tabs-service';

@IonicPage()
@Component({
  templateUrl: 'tab-page-10.html',
  providers: [TabsService]
})
export class TabPage10 {
  params: any;

  constructor(private tabsService: TabsService) {
    this.tabsService.load("tab10").subscribe(snapshot => {
      this.params = snapshot;
    });
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.params = changes['data'].currentValue;
  }

  onItemClick(item:any, e:any) {
    if (e) {
      e.stopPropagation();
    }
    if (window.location.hostname === "localhost") {
        console.log(item.title);
    } else {
        Toast.show(item.title, '1000', 'bottom').subscribe(toast => { });
    }
  }

  onShare(item:any, e:any) {
    if (e) {
      e.stopPropagation();
    }
    if (window.location.hostname === "localhost") {
        console.log("Share");
    } else {
        Toast.show("Share", '1000', 'bottom').subscribe(toast => { });
    }
  }
}
