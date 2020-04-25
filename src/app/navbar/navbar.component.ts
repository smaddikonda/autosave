import {Component, OnInit} from '@angular/core';
import {APP_NAME} from '../utils/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  appName: string;

  constructor() {
    this.appName = APP_NAME;
  }

  ngOnInit(): void {
  }

}
