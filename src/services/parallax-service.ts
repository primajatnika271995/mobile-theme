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
export class ParallaxService implements IService {

    constructor(public af: AngularFireDatabase) { }

    getId = (): string => 'parallax';

    getTitle = (): string => 'Parallax';

    getAllThemes = (): Array<any> => {
        return [
            { "title": "News List", "theme": "layout1" },
            { "title": "Profile", "theme": "layout2" },
            { "title": "Product", "theme": "layout3" },
            { "title": "News", "theme": "layout4" }
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
            headerTitle: "News List",
            headerImage: 'assets/images/background-small/0.jpg',
            title: 'What models will do when robots take their jobs?',
            subtitle: 'Showbiz',
            items: [
                {
                    id: 1,
                    title: 'Grant Marshall',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: 'assets/images/avatar/0.jpg',
                    imageAlt: 'avatar',
                    button: 'READ'
                },
                {
                    id: 2,
                    title: 'Pena Valdez',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: 'assets/images/avatar/1.jpg',
                    imageAlt: 'avatar',
                    button: 'READ'
                },
                {
                    id: 3,
                    title: 'Jessica Miles',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: 'assets/images/avatar/2.jpg',
                    imageAlt: 'avatar',
                    button: 'READ'
                },
                {
                    id: 4,
                    title: 'Kerri Barber',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: 'assets/images/avatar/3.jpg',
                    imageAlt: 'avatar',
                    button: 'READ'
                },
                {
                    id: 5,
                    title: 'Natasha Gamble',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: 'assets/images/avatar/4.jpg',
                    imageAlt: 'avatar',
                    button: 'READ'
                },
                {
                    id: 6,
                    title: 'White Castaneda',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: 'assets/images/avatar/5.jpg',
                    imageAlt: 'avatar',
                    button: 'READ'
                },
                {
                    id: 7,
                    title: 'Vanessa Ryan',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: 'assets/images/avatar/6.jpg',
                    imageAlt: 'avatar',
                    button: 'READ'
                },
                {
                    id: 8,
                    title: 'Meredith Hendricks',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: 'assets/images/avatar/7.jpg',
                    imageAlt: 'avatar',
                    button: 'READ'
                },
                {
                    id: 9,
                    title: 'Carol Kelly',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: 'assets/images/avatar/1.jpg',
                    imageAlt: 'avatar',
                    button: 'READ'
                },
                {
                    id: 10,
                    title: 'Barrera Ramsey',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: 'assets/images/avatar/2.jpg',
                    imageAlt: 'avatar',
                    button: 'READ'
                },
                {
                    id: 11,
                    title: 'Julia Petersen',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: 'assets/images/avatar/0.jpg',
                    imageAlt: 'avatar',
                    button: 'READ'
                },
                {
                    id: 12,
                    title: 'Holman Valencia',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: 'assets/images/avatar/3.jpg',
                    imageAlt: 'Presque Isle Harbor',
                    button: 'READ'
                }
            ]
        };
    };

    getDataForLayout2 = (): any => {
        return {
            headerTitle: "Profile",
            headerImage: 'assets/images/background-small/1.jpg',
            avatar: "assets/images/avatar/3.jpg",
            title: "Bruce Wilkerson",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            items: [
                {
                    id: 1,
                    avatar: "assets/images/avatar/1.jpg",
                    title: 'Grant Marshall',
                    subtitle: '@grant333',
                    button: "Follow"
                },
                {
                    id: 2,
                    avatar: "assets/images/avatar/2.jpg",
                    title: 'Pena Valdez',
                    subtitle: '@penaxxy',
                    button: "Follow"
                },
                {
                    id: 3,
                    avatar: "assets/images/avatar/3.jpg",
                    title: 'Jessica Miles',
                    subtitle: '@jessica957',
                    button: "Follow"
                },
                {
                    id: 4,
                    avatar: "assets/images/avatar/4.jpg",
                    title: 'Kerri Barber',
                    subtitle: '@kerri333',
                    button: "Follow"
                },
                {
                    id: 5,
                    avatar: "assets/images/avatar/19.jpg",
                    title: 'Natasha Gamble',
                    subtitle: '@natashaxxy',
                    button: "Follow"
                },
                {
                    id: 6,
                    avatar: "assets/images/avatar/20.jpg",
                    title: 'White Castaneda',
                    subtitle: '@white34',
                    button: "Follow"
                },
                {
                    id: 7,
                    avatar: "assets/images/avatar/14.jpg",
                    title: 'Vanessa Rya',
                    subtitle: '@vanessa957',
                    button: "Follow"
                },
                {
                    id: 8,
                    avatar: "assets/images/avatar/5.jpg",
                    title: 'Meredith Hendricks',
                    subtitle: '@meredith957',
                    button: "Follow"
                }
            ]
        };
    };

    getDataForLayout3 = (): any => {
        return {
            headerTitle: "Product",
            headerImage: 'assets/images/background-small/4.jpg',
            shareIcon: "more",
            items: [
                {
                    id: 1,
                    category: "NEW OFFER",
                    title: 'Super & Black',
                    subtitle: 'Available Now',
                    button: "$63.99",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    productDescriptions: [
                        {
                            "id": 1,
                            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        },
                        {
                            "id": 2,
                            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        },
                        {
                            "id": 3,
                            "description": "passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                        },
                        {
                            "id": 4,
                            "description": "passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                        }
                    ],
                }
            ]
        };
    };

    getDataForLayout4 = (): any => {
        return {
            headerTitle: "News",
            headerImage: 'assets/images/background-small/3.jpg',
            title: "Infinit bridge made in China. Locals said that is not possible to see end of bridge. 7 people lost during walk.",
            subtitle: "by Name Surname",
            category: "ENGINEERING",
            avatar: "assets/images/avatar/3.jpg",
            shareIcon: "more",
            items: [
                {
                    id: 1,
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                },
                {
                    id: 2,
                    title: 'Lorem ipsum dolor sit amet',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                },
                {
                  id: 3,
                  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
                },
                {
                    id: 4,
                    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
                }
            ]
        };
    }

    getEventsForTheme = (menuItem: any): any => {
        return {
            'onProceed': function (item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("onProceed");
                } else {
                    Toast.show(item, '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onShare': function (item: any) {
                if (window.location.hostname === "localhost") {
                    console.log("Share");
                } else {
                    Toast.show("Share", '1000', 'bottom').subscribe(toast => { });
                }
            },
            'onItemClick': function (item: any) {
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
            data: this.getDataForTheme(item),
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
                    .object('parallax/' + item.theme)
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
