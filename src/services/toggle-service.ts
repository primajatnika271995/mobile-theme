import { IService } from './IService';
import { Toast } from 'ionic-native';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SpinnerDialog } from 'ionic-native';
import { Network } from 'ionic-native';
import { Subject } from 'rxjs/Subject';
import { AppSettings } from './app-settings'

@Injectable()
export class ToggleService implements IService {

    constructor(public af: AngularFireDatabase) { }

    getId = (): string => 'toggle';

    getTitle = (): string => 'Toggle';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "With avatars", "theme"  : "layout1"},
          {"title" : "Simple 2", "theme"  : "layout2"},
          {"title" : "Simple", "theme"  : "layout3"},
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
        return {
            "title": "With avatars",
            "items": [
                { "id": 0, "title": "Chloe	Gibson", "subtitle": "chloe.gibson@email", "isChecked": false, "avatar": "assets/images/avatar/0.jpg" },
                { "id": 1, "title": "Amy	King", "subtitle": "amy.king@email", "isChecked": false, "avatar": "assets/images/avatar/1.jpg" },
                { "id": 2, "title": "Jasmine	Stewart", "subtitle": "jasmine.stewart@email", "isChecked": false, "avatar": "assets/images/avatar/2.jpg" },
                { "id": 3, "title": "Lillian	Springer", "subtitle": "lillian.springer@emai", "isChecked": false, "avatar": "assets/images/avatar/3.jpg" },
                { "id": 4, "title": "Sophie	Dyer", "subtitle": "sophie.dyer@email", "isChecked": false, "avatar": "assets/images/avatar/4.jpg" },
                { "id": 5, "title": "Julia	Lawrence", "subtitle": "julia.lawrence@email", "isChecked": false, "avatar": "assets/images/avatar/5.jpg" },
                { "id": 6, "title": "Grace	Lambert", "subtitle": "grace.lambert@email", "isChecked": false, "avatar": "assets/images/avatar/6.jpg" },
                { "id": 7, "title": "Amanda	Lawrence", "subtitle": "amanda.lawrence@emai", "isChecked": false, "avatar": "assets/images/avatar/7.jpg" },
                { "id": 8, "title": "Sally	Reid", "subtitle": "sally.reid@email", "isChecked": false, "avatar": "assets/images/avatar/8.jpg" },
                { "id": 9, "title": "Alison	Parsons", "subtitle": "alison.parsons@emai", "isChecked": false, "avatar": "assets/images/avatar/9.jpg" },
                { "id": 10, "title": "Faith	Avery", "subtitle": "faith.avery@email", "isChecked": false, "avatar": "assets/images/avatar/10.jpg" },
                { "id": 11, "title": "Amelia	Mathis", "subtitle": "amelia.mathis@email", "isChecked": false, "avatar": "assets/images/avatar/11.jpg" },
                { "id": 12, "title": "Sarah	Reid", "subtitle": "sarah.reid@email", "isChecked": false, "avatar": "assets/images/avatar/12.jpg" },
            ]
        };
    };

    getDataForLayout2 = (): any => {
        return {
            "title": "Simple 2",
            "items": [
                { "id": 1, "title": "marshall@yahoo.com",  "subtitle": "Grant", "isChecked": true },
                { "id": 2, "title": "valdez@yahoo.com",  "subtitle": "Pena", "isChecked": false },
                { "id": 4, "title": "miles@mail.com",  "subtitle": "Jessica", "isChecked": false },
                { "id": 3, "title": "barber@gmail.com",  "subtitle": "Kerri", "isChecked": false },
                { "id": 5, "title": "gamble@outlook.com",  "subtitle": "Natasha", "isChecked": false },
                { "id": 6, "title": "castaneda@mail.com",  "subtitle": "White", "isChecked": true },
                { "id": 7, "title": "ryan@mail.com",  "subtitle": "Vanessa", "isChecked": false },
                { "id": 8, "title": "hendricks@yahoo.com",  "subtitle": "Meredith", "isChecked": false },
                { "id": 9, "title": "kelly@mail.com",  "subtitle": "Carol", "isChecked": false }
            ]
        };
    };

    getDataForLayout3 = (): any => {
        return {
            "title": "Simple",
            "items": [
                { "id": 0, "title": "Romania", "isChecked": true },
                { "id": 1, "title": "Mauritania", "isChecked": false },
                { "id": 2, "title": "Tonga", "isChecked": false },
                { "id": 3, "title": "Norway", "isChecked": false },
                { "id": 4, "title": "Northern Mariana Islands", "isChecked": true },
                { "id": 5, "title": "Nauru", "isChecked": true },
                { "id": 6, "title": "Iran", "isChecked": true },
                { "id": 7, "title": "Swaziland", "isChecked": false },
                { "id": 8, "title": "Uruguay", "isChecked": false },
                { "id": 9, "title": "Ireland", "isChecked": false },
                { "id": 10, "title": "Indonesia", "isChecked": false },
                { "id": 11, "title": "Austria", "isChecked": false },
                { "id": 12, "title": "Panama", "isChecked": false },
            ]
        };
    };

    getEventsForTheme = (menuItem: any): any => {
        return {
            'onSelect': function (item: any) {
                if (window.location.hostname === "localhost") {
                    console.log(item.title);
                } else {
                    Toast.show(item.title, '1000', 'bottom').subscribe(toast => { });
                }
            },
        };
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
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('toggle/' + item.theme)
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
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }


}
