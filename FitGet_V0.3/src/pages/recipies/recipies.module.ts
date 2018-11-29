import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipiesPage } from './recipies';

@NgModule({
  declarations: [
    RecipiesPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipiesPage),
  ],
})
export class RecipiesPageModule {}
