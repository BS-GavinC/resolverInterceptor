import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _router : Router) {
  }

  show(){
    this._router.navigate(['/show'])
  }

  hide(){
    this._router.navigate(['/'])
  }

  set(){
    localStorage.setItem('token', 'monBeauTokenToutNeuf')
  }

  clear(){
    localStorage.clear()
  }
  title = 'untitled2';
}
