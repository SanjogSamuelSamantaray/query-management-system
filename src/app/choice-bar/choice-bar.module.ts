import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChoiceBarComponent } from './choice-bar.component';
import { ChoiceBarRoutingModule } from './choice-bar.routing.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';



@NgModule({
  declarations: [
    ChoiceBarComponent
  ],
  imports: [
    CommonModule,
    ChoiceBarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
  ]
})
export class ChoiceBarModule { }
