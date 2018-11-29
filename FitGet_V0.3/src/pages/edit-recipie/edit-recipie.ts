import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the EditRecipiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-recipie',
  templateUrl: 'edit-recipie.html',
})
export class EditRecipiePage {
  mode;
  recipeForm:FormGroup;
  constructor(public navCtrl: NavController, private fb:FormBuilder, public navParams: NavParams) {
    this.recipeForm=this.fb.group({
      title:['',Validators.required],
      description:['',Validators.required],
      dificulty:['',Validators.required]
    })
  }

  ionViewDidLoad() {
    this.mode=this.navParams.get('mode');
    
  }

}
