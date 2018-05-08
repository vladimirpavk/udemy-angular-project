import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private logInError = false;

  constructor(private authService:AuthService,
              private router: Router) { }

  ngOnInit() {
    this.authService.loggedInStatusChanged.subscribe(
      (status:boolean)=>{
        if(status){
          this.router.navigate(['/recipes']);
          this.logInError = false;
        }
        else
        {
          this.logInError = true;
        }
      }
    )
  }

  formSubmitted(form: NgForm){
    this.authService.signinUser(form.value.email, form.value.password);
  }

}
