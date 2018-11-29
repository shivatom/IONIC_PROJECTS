import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the ShopingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shoping-list',
  templateUrl: 'shoping-list.html',
})
export class ShopingListPage {

  shopingForm:FormGroup;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private fb:FormBuilder
  ){
    this.shopingForm=this.fb.group({
      name:['',Validators.required],
      amount:['',Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopingListPage');
  }

  submitForm(){
    console.log(this.shopingForm.value)
  }

}
