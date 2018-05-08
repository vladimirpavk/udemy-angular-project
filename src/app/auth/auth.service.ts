import * as firebase from 'firebase';
import { Subject } from 'rxjs';

export class AuthService{

    public userLoggedIn: boolean = false;
    public loggedInStatusChanged: Subject<boolean> = new Subject<boolean>();

    public token:string = '';

    public signupUser(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password).then((ok)=>console.log(ok)).catch((err)=>console.log(err));
    }

    public signinUser(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((ok)=>{
                this.userLoggedIn = true;
                this.loggedInStatusChanged.next(true);
                this.token=ok.G,
            console.log("Successfully loged in....");
        })
        .catch((err)=>{
            this.userLoggedIn = false;
            this.loggedInStatusChanged.next(false);
        });
    }

    public logoutUser(){
        this.userLoggedIn = false;
        this.token = '';
        this.loggedInStatusChanged.next(false);
    }
}