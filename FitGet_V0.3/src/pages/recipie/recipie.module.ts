import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipiePage } from './recipie';

@NgModule({
  declarations: [
    RecipiePage,
  ],
  imports: [
    IonicPageModule.forChild(RecipiePage),
  ],
})
export class RecipiePageModule {}
