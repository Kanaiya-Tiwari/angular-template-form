import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-template-form';
  // public fname!:any;
  // public lname!:any;
  // public email!:any;
  // public password!:any;
  // public confirmpassword!:any;

  public loginUser(data:NgForm){
    console.log(data);
  }
}
