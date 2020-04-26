import {Component, OnInit} from '@angular/core';
import {APP_NAME, ENGINEERING_MESSAGE, FORM_DISCLAIMER, WELCOME_MESSAGE} from '../utils/constants';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

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
    form: FormGroup;
    formSubmitted = false;
    formIdentifiers: any;
    formErrorMessages: any;

    constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    }

    ngOnInit(): void {
        this.initConstants();
        this.initErrorMessages();
        this.initFormIds();
        this.buildForm();
        this.initSubscriptions();
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
            timeManagement: 'Please share us your time management tricks.'
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

    initSubscriptions() {
        this.form.get(this.formIdentifiers.firstname).valueChanges.subscribe(x => {
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
}
