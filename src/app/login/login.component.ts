import {Component, OnInit} from '@angular/core';
import {APP_NAME} from '../utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  appName: string;

  constructor() {
    this.appName = APP_NAME;
  }

  ngOnInit(): void {
  }

}
