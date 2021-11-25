import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChoiceBarComponent } from './choice-bar/choice-bar.component';
import { CardsComponent } from './choice-bar/cards/cards.component';
import { FormsModule } from '@angular/forms';
import { PascalcasePipe } from './pipes/pascalcase.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChoiceBarComponent,
    CardsComponent,
    PascalcasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
