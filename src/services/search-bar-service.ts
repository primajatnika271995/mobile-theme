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
export class SearchBarService implements IService {

    constructor(public af: AngularFireDatabase) {}

    getId = (): string => 'searchBars';

    getTitle = (): string => 'Search bars';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Simple", "theme"  : "layout1"},
          {"title" : "Field + header", "theme"  : "layout2"},
          {"title" : "Field + header 2", "theme"  : "layout3"}
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
            headerTitle : "Simple",
            items: [
                {
                    title: 'Friends',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                    image: "assets/images/background/1.jpg"
                },
                {
                    title: 'Enemies',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                    image: "assets/images/background/2.jpg"
                },
                {
                    title: 'Neutral',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                    image: "assets/images/background/3.jpg"
                },
                {
                    title: 'Family',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                    image: "assets/images/background/4.jpg"
                },
                {
                    title: 'Guests',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                    image: "assets/images/background/5.jpg"
                },
                {
                    title: 'Students',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                    image: "assets/images/background/6.jpg"
                },
                {
                    title: 'Friends',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                    image: "assets/images/background/7.jpg"
                },
                {
                    title: 'Enemies',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                    image: "assets/images/background/8.jpg"
                },
                {
                    title: 'Neutral',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                    image: "assets/images/background/9.jpg"
                }
            ]
        };
    };

    getDataForLayout2 = (): any => {
        return {
            headerTitle : "Field + header",
            title: "Just type",
            headerImage: 'assets/images/background/1.jpg',
            items: [
                {
                    title: 'Grant Marshall',
                    subtitle: 'Lorem Ipsum is simply dummy text of the printing',
                    avatar: 'assets/images/avatar/1.jpg',
                    button: 'GET'
                },
                {
                  title: 'Pena Valdez',
                  subtitle: 'Lorem Ipsum is simply dummy text of the printing',
                  avatar: 'assets/images/avatar/2.jpg',
                  button: 'GET'
                },
                {
                  title: 'Jessica Miles',
                  subtitle: 'Lorem Ipsum is simply dummy text of the printing',
                  avatar: 'assets/images/avatar/3.jpg',
                  button: 'GET'
                },
                {
                  title: 'Kerri Barber',
                  subtitle: 'Lorem Ipsum is simply dummy text of the printing',
                  avatar: 'assets/images/avatar/4.jpg',
                  button: 'GET'
                },
                {
                  title: 'Natasha Gamble',
                  subtitle: 'Lorem Ipsum is simply dummy text of the printing',
                  avatar: 'assets/images/avatar/5.jpg',
                  button: 'GET'
                },
                {
                  title: 'White Castaneda',
                  subtitle: 'Lorem Ipsum is simply dummy text of the printing',
                  avatar: 'assets/images/avatar/6.jpg',
                  button: 'GET'
                },
                {
                  title: 'Vanessa Ryan',
                  subtitle: 'Lorem Ipsum is simply dummy text of the printing',
                  avatar: 'assets/images/avatar/7.jpg',
                  button: 'GET'
                },
                {
                  title: 'Meredith Hendricks',
                  subtitle: 'Lorem Ipsum is simply dummy text of the printing',
                  avatar: 'assets/images/avatar/8.jpg',
                  button: 'GET'
                },
                {
                  title: 'Carol Kelly',
                  subtitle: 'Lorem Ipsum is simply dummy text of the printing',
                  avatar: 'assets/images/avatar/9.jpg',
                  button: 'GET'
                }
            ]
        };
    };

    getDataForLayout3 = (): any => {
          return {
                headerTitle : "Field + header 2",
                "title": 'Search Friends',
                items: [{
                    id: 1,
                    title: 'Barrera Ramsey',
                    subtitle: '@barrera',
                    detail: "Brogan",
                    avatar: 'assets/images/avatar/1.jpg',
                },
                {
                    id: 2,
                    title: 'Julia Petersen',
                    subtitle: '@petersen3',
                    detail: "Rehrersburg",
                    avatar: 'assets/images/avatar/2.jpg',
                },
                {
                    id: 3,
                    title: 'Holman Valencia',
                    subtitle: '@valencia14',
                    detail: "Durham",
                    avatar: 'assets/images/avatar/3.jpg',
                },
                {
                    id: 4,
                    title: 'Marisa Cain',
                    subtitle: '@marisacain',
                    detail: "Callaghan",
                    avatar: 'assets/images/avatar/4.jpg',
                },
                {
                    id: 5,
                    title: 'Dejesus Norris',
                    subtitle: '@dejesusno',
                    detail: "Manitou",
                    avatar: 'assets/images/avatar/5.jpg',
                },
                {
                    id: 6,
                    title: 'Gayle Gaines',
                    subtitle: '@gaylega',
                    detail: "Weedville",
                    avatar: 'assets/images/avatar/6.jpg',
                },
                {
                    id: 7,
                    title: 'Prince Phelps',
                    subtitle: '@prince45',
                    detail: "Curtice",
                    avatar: 'assets/images/avatar/7.jpg',
                },
                {
                    id: 8,
                    title: 'Keri Hudson',
                    subtitle: '@keri444',
                    detail: "Barronett",
                    avatar: 'assets/images/avatar/8.jpg',
                }
            ]
        }
    }

    getEventsForTheme = (menuItem: any): any => {
        return {
            'onTextChange': function(text: any) {
                if (window.location.hostname === "localhost") {
                    console.log(text);
                } else {
                    Toast.show(text, '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onItemClick': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log(JSON.stringify(item));
                } else {
                    Toast.show(item.title, '1000', 'bottom').subscribe(toast => { });
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
                    .object('searchBars/' + item.theme)
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
