import {Component, OnInit} from '@angular/core';
import {APP_NAME, HOME_DISCLOSURE} from '../utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  appName: string;
  disclosure: string;

  constructor() {
    this.appName = APP_NAME;
    this.disclosure = HOME_DISCLOSURE;
  }

  ngOnInit(): void {
  }

}
