import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SpinnerDialog } from 'ionic-native';
import { Network } from 'ionic-native';
import { Subject } from 'rxjs/Subject';
import { AppSettings } from './app-settings'

@Injectable()
export class SpinnerService implements IService {

    constructor(public af: AngularFireDatabase) {}

    getId = ():string => 'spinners';

    getTitle = ():string => 'Spinners';

    getAllThemes = (): Array<any> => {
      return [
        {"title" : "All", "theme"  : "all"}
      ];
    };

    getDataForTheme = (menuItem: any): Array<any> => {
      return this[
                'getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)
      ]();
    };

    getEventsForTheme = (menuItem: any): any => {
      return {};
    };

    getDataForAll = (): Array<any> => {
      return [
        {"icon": "tail-spin"},
        {"icon": "oval"},
        {"icon": "audio"},
        {"icon": "bars"},
        {"icon": "hearts"},
        {"icon": "three-dots"},
        {"icon": "puff"},
        {"icon": "grid"},
        {"icon": "ball-triangle"},
        {"icon": "circles"}
      ];
    };

    prepareParams = (item: any) => {
      return {
          spinner: true,
          title: item.title,
          data: this.getDataForAll(),
          events: this.getEventsForTheme(item)
      };
    };

    load(item: any): Observable<any> {
      SpinnerDialog.show(null, "Loading");
        return new Observable(observer => {
          SpinnerDialog.hide();
          observer.next(this.getDataForAll());
          observer.complete();
        });
    }
}
