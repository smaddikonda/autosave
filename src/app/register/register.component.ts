import {Component, OnInit} from '@angular/core';
import {APP_NAME, HOME_DISCLOSURE} from '../utils/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  appName: string;
  disclosure: string;

  constructor() {
    this.appName = APP_NAME;
    this.disclosure = HOME_DISCLOSURE;
  }

  ngOnInit(): void {
  }

}
