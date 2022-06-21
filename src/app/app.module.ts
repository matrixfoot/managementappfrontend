import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';



import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-interceptor';

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WhoComponent } from './who/who.component';
import { WhyComponent } from './why/why.component';
import { ContactComponent } from './home/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
   
    
    
    HeaderComponent,
   
    LoginComponent,
    SignupComponent,
   
    FooterComponent,
    HomeComponent,
    WhoComponent,
    WhyComponent,
    ContactComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
