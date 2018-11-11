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
export class RegisterService implements IService {

    constructor(public af: AngularFireDatabase) { }

    getId = (): string => 'register';

    getTitle = (): string => 'Register pages';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Register + logo", "theme"  : "layout1"},
          {"title" : "Register + image", "theme"  : "layout2"}
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
        "toolbarTitle"        : "Register + logo",
        "logo"                : "assets/images/logo/2.png",
        "register"            : "register",
        "title"               : "Register your new account",
        "username"            : "Enter your username",
        "city"                : "Your home town",
        "country"             : "Where are you from?",
        "password"            : "Enter your password",
        "email"               : "Your e-mail address",
        "skip"                : "Skip",
        "lableUsername"       : "USERNAME",
        "lablePassword"       : "PASSWORD",
        "lableEmail"          : "E-MAIL",
        "lableCountry"        : "COUNTRY",
        "lableCity"           : "CITY"
      };
    };

    getDataForLayout2 = (): any => {
      return {
        "toolbarTitle"        : "Register + image",
         "title"               : "Register",
         "background"          : "assets/images/background/2.jpg",
         "username"            : "Enter your username",
         "city"                : "Your home town",
         "country"             : "Where are you from?",
         "password"            : "Enter your password",
         "email"               : "Your e-mail address",
         "register"            : "register",
         "lableUsername"       : "USERNAME",
         "lablePassword"       : "PASSWORD",
         "lableEmail"          : "E-MAIL",
         "lableCountry"        : "COUNTRY",
         "lableCity"           : "CITY"
      };
    };

    getEventsForTheme = (menuItem: any): any => {
        return {
            onRegister: function(params) {
                if (window.location.hostname === "localhost") {
                    console.log('onRegister:' + JSON.stringify(params));
                } else {
                    Toast.show('onRegister:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
                }
            },
            onSkip: function(params) {
                if (window.location.hostname === "localhost") {
                    console.log('onSkip:' + JSON.stringify(params));
                } else {
                    Toast.show('onSkip:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
                }
            }
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
                    .object('register/' + item.theme)
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
