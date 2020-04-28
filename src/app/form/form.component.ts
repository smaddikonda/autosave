import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  APP_NAME,
  ENGINEERING_MESSAGE,
  FORM_DISCLAIMER,
  MICROSERVICE_FORM_PUT_URL,
  MICROSERVICE_URL,
  WELCOME_MESSAGE
} from '../utils/constants';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Subscription, interval} from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {
  appName: string;
  welcomeMessage: string;
  fullDisclosure: string;
  engineeringHighlight: string;
  form: FormGroup;
  formSubmitted = false;
  formIdentifiers: any;
  formErrorMessages: any;
  isDraftFormPresent = false;
  isAutoSavedFormPresent = false;
  username: string;
  autoSaverSubscription: Subscription;
  private oldFormValue: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.username = 'smaddikonda';
  }

  ngOnDestroy(): void {
    const lastFormValue = this.form.value;
    lastFormValue.username = this.username;
    this.http.put(MICROSERVICE_FORM_PUT_URL + this.username, lastFormValue).subscribe((res) => {
      console.log('Logging the PUT response');
      console.dir(res);
    });
  }

  ngOnInit(): void {
    this.initConstants();
    this.initErrorMessages();
    this.initFormIds();
    this.buildForm();
    this.initSubscriptions();
    this.checkDraftForms();
    this.checkAutoSavedForms();
  }

  private checkDraftForms() {
    this.http.get(MICROSERVICE_URL).subscribe((date) => {

    });
  }

  initConstants() {
    this.appName = APP_NAME;
    this.welcomeMessage = WELCOME_MESSAGE;
    this.fullDisclosure = FORM_DISCLAIMER;
    this.engineeringHighlight = ENGINEERING_MESSAGE;
  }

  initFormIds() {
    this.formIdentifiers = {
      firstname: 'firstname',
      lastname: 'lastname',
      email: 'email',
      affects: 'affects',
      precautions: 'precautions',
      wfhProductivity: 'wfhProductivity',
      timeManagement: 'timeManagement'
    };
  }

  initErrorMessages() {
    this.formErrorMessages = {
      firstname: 'First name is mandatory.',
      lastname: 'Last name is mandatory.',
      email: 'Please provide your email id.',
      affects: 'Will be great if you could share some experiences.',
      precautions: 'Tell us so that we can learn too.',
      wfhProductivity: 'This is required for an intersting survey.',
      timeManagement: 'Please share us your time management tricks.',
      length: 'Sorry, only a maximum of 2000 characters is allowed.'
    };
  }

  buildForm() {
    const firstnameFC = new FormControl('', Validators.required);
    const lastnameFC = new FormControl('', Validators.required);
    const emailFC = new FormControl('', [Validators.required, Validators.email]);
    const affectsFC = new FormControl('', [Validators.required, Validators.maxLength(2000)]);
    const precautionsFC = new FormControl('', [Validators.required, Validators.maxLength(2000)]);
    const wfhProductivityFC = new FormControl('', Validators.required);
    const timeManagementFC = new FormControl('', [Validators.required, Validators.maxLength(2000)]);
    this.form = this.formBuilder.group({
      firstname: firstnameFC,
      lastname: lastnameFC,
      email: emailFC,
      affects: affectsFC,
      precautions: precautionsFC,
      wfhProductivity: wfhProductivityFC,
      timeManagement: timeManagementFC
    });
  }

  testSave() {
    const formValue = this.form.value;
    formValue.username = this.username;
  }

  initSubscriptions() {
    this.autoSaverSubscription = interval(5000).subscribe((callCount) => {
      let newValue;
      if (!this.form.dirty) {
        this.oldFormValue = this.form.value;
      }
      // For is dirty, user has started filling the form.
      // Comapare new and old values for diff.
      else {
        newValue = this.form.value;
        if (!_.isEqual(this.oldFormValue, newValue)) {
          newValue.username = this.username;
          this.http.put(MICROSERVICE_FORM_PUT_URL + this.username, newValue).subscribe((res) => {
            console.log('Logging the PUT response');
            console.dir(res);
          });
          this.oldFormValue = newValue;
        }
      }
    });
  }

  isFieldValid(field: string) {
    return !this.form.controls[field].valid
      && this.formSubmitted && (this.form.controls[field].dirty || this.form.controls[field].touched);
  }

  displayFieldCss(field: string) {
    return {
      'is-invalid': this.isFieldValid(field)
    };
  }

  submitForm() {
  }

  onFormSubmit() {
    this.formSubmitted = true;
    if (this.form.valid) {
      console.log('Form is submitted successfully');
      this.submitForm();
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  isTextareaLengthPermitted(formIdentifier): boolean {
    return this.form.get(formIdentifier).value.length <= 2000;
  }
}
