export const APP_NAME = 'CoronaTimes';

export const WELCOME_MESSAGE = 'Please fill out this form and let us know how you are surviving the pandemic.\n' +
  'By clicking an appropriate button on this page, you can:\n' +
  '1. <b>SUBMIT</b> the form: All fields are mandatory, and your submission will be <b>public</b>.\n' +
  '2. <b>SAVE AS DRAFT</b>: you can skip one or more fields, but your progress will be <b>public</b>.\n' +
  '3. <b>EXIT</b> the app whenever you want; your progress will be auto-saved and will be <b>private</b>.\n' +
  '4. <b>LOAD DRAFT FORM</b>: you can load a previous form that you saved as a draft and continue working on it.\n' +
  '5. <b>LOAD AUTO-SAVED FORM</b>: you can load a previous form that was saved automatically and continue working on it.';

export const FORM_DISCLAIMER = 'This is a personal/hobby project.\n' +
  'The idea of this app is that the users can share their experiences with the ongoing covid-19 pandemic.\n ' +
  'This app is currently under development and the data you submit is not guaranteed to be protected by a privacy policy. ' +
  '<b>So please do not share any sensitive information.</b>';

export const HOME_DISCLOSURE = '<b>CoronaTimes</b> is an open-source web app built by me — Sai Maddikonda — as a personal/hobby project, ' +
  'to experiment with enterprise architectural paradigms like microservices, cloud native development, containerization, orchestration, etc.<br><br>' +
  'The app is still under development and is currently being used for demonstrative purposes only, so some features might not work as expected.<br><br>' +
  'The privacy policy, security, and encryption aspects of the user data are still work in progress; <b>so please do ' +
  'not share any confidential user data while using this application. ' +
  'I accept zero liability for the abuse of your data/privacy.</b>';

export const ENGINEERING_MESSAGE = 'The main engineering feature being experimented with on this page ' +
  'is the <b>Auto-Save Form</b> feature.';

// export const HOST = 'http://192.168.99.100';
export const HOST = 'http://localhost';

export const MICROSERVICE_FORM_BASE_URL = HOST + ':3000/api/forms/';
