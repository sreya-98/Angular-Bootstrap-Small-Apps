import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import { ChangeUsernameAutoComponent } from './components/change-username-auto/change-username-auto.component';
import { SmsAppComponent } from './components/sms-app/sms-app.component'
import {ShowPasswordComponent} from "./components/show-password/show-password.component";
import { AmountRangeComponent } from './components/amount-range/amount-range.component';
import { ThemeComponent } from './components/theme/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeUsernameAutoComponent,
    SmsAppComponent,
    ShowPasswordComponent,
    AmountRangeComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
