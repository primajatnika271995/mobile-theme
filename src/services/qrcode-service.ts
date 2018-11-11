import { IService } from './IService';
import { Toast } from 'ionic-native';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SpinnerDialog } from 'ionic-native';
import { Network } from 'ionic-native';
import { Subject } from 'rxjs/Subject';
import { AppSettings } from './app-settings'

export class QRCodeService implements IService {

    constructor() { }

    getId = (): string => 'qrcode';

    getTitle = (): string => 'QRCode';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Layout 1", "theme"  : "layout1"}
        ];
    };

    getDataForTheme = (menuItem: any): any => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    getDataForLayout1 = (): any => {
        return {}
    };

    getDataForLayout2 = (): any => {
        return {};
    };

     getEventsForTheme = (menuItem: any): any => {
        return {};
    };

    prepareParams = (item: any) => {
        let result = {
            title: item.title,
            data: [],
            events: this.getEventsForTheme(item)
        };
        result[this.getShowItemId(item)] = true;
        return result;
    };

    getShowItemId = (item: any): string => {
        return this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
    };

    load(item: any): Observable<any> {
        SpinnerDialog.show(null, "Loading");
          return new Observable(observer => {
            SpinnerDialog.hide();
            observer.next(this.getDataForTheme(item));
            observer.complete();
          });
    }
}
