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
export class ListViewDragAndDropService implements IService {

    constructor(public af: AngularFireDatabase) { }

    getId = (): string => 'dragAndDrop';

    getTitle = (): string => 'Drag and Drop';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Small item + header", "theme"  : "layout1"},
          {"title" : "Products + CTA header", "theme"  : "layout2"},
          {"title" : "Medium item with avatar", "theme"  : "layout3"}
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
            header: "Distance",
            items: [
                {
                    id: 1,
                    title: 'Brogan',
                    subtitle: 'Chad',
                    textIcon: '7186 km'
                },
                {
                    id: 2,
                    title: 'Rehrersburg',
                    subtitle: 'Mauritania',
                    textIcon: '2281 km'
                },
                {
                    id: 3,
                    title: 'Callaghan',
                    subtitle: 'Tonga',
                    textIcon: '1748 km'
                },
                {
                    id: 4,
                    title: 'Manitou',
                    subtitle: 'Norway',
                    textIcon: '3450 km'
                },
                {
                    id: 5,
                    title: 'Barronett',
                    subtitle: 'Iran',
                    textIcon: '7374 km'
                },
                {
                    id: 6,
                    title: 'Urie',
                    subtitle: 'Swaziland',
                    textIcon: '6070 km'
                },
                {
                    id: 7,
                    title: 'Blackgum',
                    subtitle: 'Uruguay',
                    textIcon: '8158 km'
                },
                {
                    id: 8,
                    title: 'Williston',
                    subtitle: 'Ireland',
                    textIcon: '292 km'
                },
                {
                    id: 9,
                    title: 'Keller',
                    subtitle: 'Austria',
                    textIcon: '9231 km'
                },
                {
                    id: 10,
                    title: 'Maxville',
                    subtitle: 'Panama',
                    textIcon: '9972 km'
                },
                {
                    id: 11,
                    title: 'Madrid',
                    subtitle: 'Singapore',
                    textIcon: '9720 km'
                },
                {
                    id: 12,
                    title: 'Fairacres',
                    subtitle: 'Colombia',
                    textIcon: '988 km'
                },
                {
                    id: 13,
                    title: 'Vincent',
                    subtitle: 'Antarctica',
                    textIcon: '1000 km'
                },
                {
                    id: 14,
                    title: 'Hollins',
                    subtitle: 'Wallis and Futuna Islands',
                    textIcon: '2565 km'
                }
            ]
        };
    };

    getDataForLayout2 = (): any => {
        return {
            header: "Cart",
            title: 'Make order now!',
            subtitle: 'Reorder list by your wish.',
            button: 'get',
            items: [
                {
                    id: 1,
                    title: 'Swim suit',
                    subtitle: '20% Off',
                    image: 'assets/images/avatar/17.jpg',
                    price: '$5.99'
                },
                {
                    id: 2,
                    title: 'Hat',
                    subtitle: '2% Off',
                    image: 'assets/images/avatar/18.jpg',
                    price: '$21.60'
                },
                {
                    id: 3,
                    title: 'Sweater',
                    subtitle: '29% Off',
                    image: 'assets/images/avatar/19.jpg',
                    price: '$27.90'
                },
                {
                    id: 4,
                    title: 'Shirt',
                    subtitle: '10% Off',
                    image: 'assets/images/avatar/20.jpg',
                    price: '$35.00'
                },
                {
                    id: 5,
                    title: 'Top',
                    subtitle: '24% Off',
                    image: 'assets/images/avatar/21.jpg',
                    price: '$3.99'
                },
                {
                    id: 6,
                    title: 'pullover',
                    subtitle: '4% Off',
                    image: 'assets/images/avatar/22.jpg',
                    price: '$5.99'
                },
                {
                    id: 7,
                    title: 'tog',
                    subtitle: '30% Off',
                    image: 'assets/images/avatar/11.jpg',
                    price: '$15.99'
                }
            ]
        };
    };

    getDataForLayout3 = (): any => {
        return {
            header: "Followers",
            button : "Confirm",
            items: [
                {
                    id: 1,
                    title: 'Grant Marshall',
                    subtitle: '@grant333',
                    image: 'assets/images/avatar/0.jpg',
                },
                {
                    id: 2,
                    title: 'Pena Valdez',
                    subtitle: '@penaxxy',
                    image: 'assets/images/avatar/1.jpg',
                },
                {
                    id: 3,
                    title: 'Jessica Miles',
                    subtitle: '@jessica957',
                    image: 'assets/images/avatar/2.jpg',
                },
                {
                    id: 4,
                    title: 'Kerri Barber',
                    subtitle: '@kerri333',
                    image: 'assets/images/avatar/3.jpg',
                },
                {
                    id: 5,
                    title: 'Natasha Gamble',
                    subtitle: '@natashaxxy',
                    image: 'assets/images/avatar/4.jpg',
                },
                {
                    id: 6,
                    title: 'White Castaneda',
                    subtitle: '@white34',
                    image: 'assets/images/avatar/5.jpg',
                },
                {
                    id: 7,
                    title: 'Vanessa Ryan',
                    subtitle: '@vanessa957',
                    image: 'assets/images/avatar/6.jpg',
                },
                {
                    id: 8,
                    title: 'Meredith Hendricks',
                    subtitle: '@meredith957',
                    image: 'assets/images/avatar/7.jpg',
                },
                {
                    id: 9,
                    title: 'Carol Kelly',
                    subtitle: '@carolm_e',
                    image: 'assets/images/avatar/8.jpg',
                },
                {
                    id: 10,
                    title: 'Victoria Mitchell',
                    subtitle: '@barreraxxy',
                    image: 'assets/images/avatar/9.jpg',
                },
                {
                    id: 11,
                    title: 'Barrera Ramsey',
                    subtitle: '@barrera898',
                    image: 'assets/images/avatar/10.jpg',
                }
            ]
        };
    }

    getEventsForTheme = (menuItem: any): any => {
        return {
            'onItemClick': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log(item);
                } else {
                    Toast.show(item, '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onProceed': function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("Proceed");
                } else {
                    Toast.show("Proceed", '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onButtonGetClick' : function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("Get");
                } else {
                    Toast.show("Confirm", '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onButtonClick' : function(item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("Confirm");
                } else {
                    Toast.show("Confirm", '1000', 'bottom').subscribe(toast => { });
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
    }

    load(item: any): Observable<any> {
        SpinnerDialog.show(null, "Loading");
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('listView/dragAndDrop/' + item.theme)
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
