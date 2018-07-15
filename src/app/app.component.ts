
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { SigninPage } from '../pages/signin/signin';


const config = {
  apiKey: "AIzaSyCooD4y1krkilOdvTPyHkX-4cr2qmvnebM",
  authDomain: "chat-ae18e.firebaseapp.com",
  databaseURL: "https://chat-ae18e.firebaseio.com",
  projectId: "chat-ae18e",
  storageBucket: "chat-ae18e.appspot.com",
};


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

