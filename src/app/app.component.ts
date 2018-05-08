import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(){}

  ngOnInit(){
    firebase.initializeApp(
      {
        apiKey: "AIzaSyA0_gN5ID_S7W8rsPQT-crkLYDgOUkV5yA",
        authDomain: "udemy-angular-http-33434.firebaseapp.com",      
      }
    );
  }

}
