import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './sidebar/auth/auth.component';
import { EmailComponent } from './sidebar/email/email.component';
import { MenuComponent } from './sidebar/menu/menu.component';
import { PhoneComponent } from './sidebar/phone/phone.component';
import { SociallinkComponent } from './sidebar/sociallink/sociallink.component';
import { CardComponent } from './card/card.component';
import { HeroComponent } from './card/hero/hero.component';
import { CardtwoComponent } from './card/cardtwo/cardtwo.component';
import { FooterComponent } from './card/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { Signup2Component } from './signup2/signup2.component';
import { Signin2Component } from './signin2/signin2.component';

@NgModule({
  declarations: [
    AppComponent,
    AllCourseComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
    PagesComponent,
    AuthComponent,
    EmailComponent,
    MenuComponent,
    PhoneComponent,
    SociallinkComponent,
    CardComponent,
    HeroComponent,
    CardtwoComponent,
    FooterComponent,
    Signup2Component,
    Signin2Component,
  
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
