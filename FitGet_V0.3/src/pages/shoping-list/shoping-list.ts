import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoppingListService } from '../services/shoping-list';


@IonicPage()
@Component({
  selector: 'page-shoping-list',
  templateUrl: 'shoping-list.html',
})
export class ShopingListPage {

  shopingForm:FormGroup;
  ingrediantList;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private fb:FormBuilder,
    
    private serviceList:ShoppingListService
  ){
    this.shopingForm=this.fb.group({
      name:['',Validators.required],
      amount:['',Validators.required]
    })
  }

  ionViewWillEnter(){
    this.ingrediantList=this.serviceList.getItem()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopingListPage');
  }

  submitForm(){
    this.serviceList.addItem(this.shopingForm.value.name,this.shopingForm.value.amount)
    
  }

  deleteItem(index){
    this.serviceList.removeItem(index);
  }
}
