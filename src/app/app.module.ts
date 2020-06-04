import {  HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { SecurityService } from './security/services/security.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UnknownPageComponent } from './unknown-page/unknown-page.component';
import { CustomDirective } from './diretivas/custom.directive';
import { DiretivaComponentComponent } from './diretiva-component/diretiva-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UnknownPageComponent,
    CustomDirective,
    DiretivaComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [SecurityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
