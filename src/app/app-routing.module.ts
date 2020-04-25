import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {FormComponent} from './form/form.component';
import {FeedComponent} from './feed/feed.component';
import {RegisterComponent} from './register/register.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'share', component: FormComponent},
  {path: '**', component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
  LoginComponent,
  FormComponent,
  FeedComponent,
  RegisterComponent
];
