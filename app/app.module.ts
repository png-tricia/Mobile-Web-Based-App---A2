import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MaterialModule } from './modules/material-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { HeaderGariandpComponent } from './header-gariandp/header-gariandp.component';
import { FooterGariandpComponent } from './footer-gariandp/footer-gariandp.component';
import { BooksGariandpComponent } from './books-gariandp/books-gariandp.component';
import { CampusGariandpComponent } from './campus-gariandp/campus-gariandp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderGariandpComponent,
    FooterGariandpComponent,
    BooksGariandpComponent,
    CampusGariandpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
