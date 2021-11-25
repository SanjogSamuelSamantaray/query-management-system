import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoiceBarComponent } from './choice-bar.component';

const routes: Routes = [{ path: '', component: ChoiceBarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChoiceBarRoutingModule { }
