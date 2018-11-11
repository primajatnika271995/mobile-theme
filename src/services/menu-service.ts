import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Toast } from 'ionic-native';
import { Observable } from 'rxjs/Observable';
import { SpinnerDialog } from 'ionic-native';
import { Network } from 'ionic-native';
import { Subject } from 'rxjs/Subject';
import { AppSettings } from './app-settings';

@Injectable()
export class MenuService implements IService {

    constructor(public af: AngularFireDatabase) {}

    getId = ():string => 'menu';

    getTitle = ():string => 'UIAppTemplate';

    getAllThemes = (): Array<any> => {
      return [
        {"title" : "Maps", "theme"  : "maps",  "icon" : "icon-google-maps", "listView" : false, "component":"", "singlePage":false},
      ];
    };

    getDataForTheme = () => {
      return {
        "background": "../assets/images/background/20.jpg",
        "image": "../assets/images/logo/1.png",
        "title": "BBLMPanel IoT",
        "description": "Aplikasi Monitoring dan Kontrol Mesin"
      };
    };
  
    getEventsForTheme = (menuItem: any): any => {
      return {};
    };
  
    prepareParams = (item: any) => {
      return {
        title: item.title,
        data: {},
        events: this.getEventsForTheme(item)
      };
    };
  
    load(item: any): Observable<any> {
      SpinnerDialog.show(null, "Loading");
      if (AppSettings.IS_FIREBASE_ENABLED) {
        return new Observable(observer => {
          this.af
            .object('menu')
            .valueChanges()
            .subscribe(snapshot => {
              SpinnerDialog.hide();
              observer.next(snapshot);
              observer.complete();
            }, err => {
              SpinnerDialog.hide();
              observer.error([]);
              observer.complete();
            });
        });
      } else {
        return new Observable(observer => {
          SpinnerDialog.hide();
          observer.next(this.getDataForTheme());
          observer.complete();
        });
      }
    }
}


