import {Component, OnInit} from '@angular/core';
import {APP_NAME, ENGINEERING_MESSAGE, FORM_DISCLAIMER, WELCOME_MESSAGE} from '../utils/constants';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  appName: string;
  welcomeMessage: string;
  fullDisclosure: string;
  engineeringHighlight: string;

  constructor() {
    this.appName = APP_NAME;
    this.welcomeMessage = WELCOME_MESSAGE;
    this.fullDisclosure = FORM_DISCLAIMER;
    this.engineeringHighlight = ENGINEERING_MESSAGE;
  }

  ngOnInit(): void {
  }

  onFormSubmit(){

  }
}
