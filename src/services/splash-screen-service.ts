import { IService } from './IService';
import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SpinnerDialog } from 'ionic-native';
import { Network } from 'ionic-native';
import { Subject } from 'rxjs/Subject';
import { AppSettings } from './app-settings'

export class SplashScreenService implements IService {

    constructor() { }

    getId = (): string => 'splashScreens';

    getTitle = (): string => 'Splash screens';

    getAllThemes = (): Array<any> => {
        return [
            { "title": "Animation Logo + Ken Burns", "theme": "layout1" },
            { "title": "Logo + fade in + Ken Burns", "theme": "layout2" },
            { "title": "Logo + Title + Ken Burns", "theme": "layout3" }
        ];
    };

    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    getDataForLayout1 = (): any => {
        return {
            "duration": 10000,
            "backgroundImage": 'assets/images/splashscreen/2.jpg',
            "logo": 'assets/images/logo/4.png',
            "title": ""
        };
    }

    getDataForLayout2 = (): any => {
        return {
            "duration": 10000,
            "backgroundImage": 'assets/images/splashscreen/3.jpg',
            "logo": 'assets/images/logo/3.png',
            "title": ""
        };
    };

    getDataForLayout3 = (): any => {
        return {
            "duration": 10000,
            "backgroundImage": 'assets/images/splashscreen/1.jpg',
            "logo": 'assets/images/logo/4.png',
            "title": "Welcome to our new iOS 11 theme"
        };
    };

    getEventsForTheme = (menuItem: any, navCtrl: NavController): any => {
        return {
            "onRedirect": function () {
                navCtrl.pop();
            }
        };
    };

    getShowItemId = (item: any): string => {
        return this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
    };

    prepareParams = (item: any, navCtrl: NavController) => {
        let result = {
            title: item.title,
            data: [],
            events: this.getEventsForTheme(item, navCtrl)
        };
        result[this.getShowItemId(item)] = true;
        return result;
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
