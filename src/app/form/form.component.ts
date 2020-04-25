import {Component, OnInit} from '@angular/core';
import {APP_NAME, FULL_DISCLOSURE, WELCOME_MESSAGE} from '../utils/constants';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  appName: string;
  welcomeMessage: string;
  fullDisclosure: string;

  constructor() {
    this.appName = APP_NAME;
    this.welcomeMessage = WELCOME_MESSAGE;
    this.fullDisclosure = FULL_DISCLOSURE;
  }

  ngOnInit(): void {
  }

}
