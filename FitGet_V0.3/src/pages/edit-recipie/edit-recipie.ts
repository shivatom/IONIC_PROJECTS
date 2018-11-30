import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

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
  constructor(
    public navCtrl: NavController, 
    private fb:FormBuilder, 
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    private alertControl:AlertController
    ) {
    this.recipeForm=this.fb.group({
      title:['',Validators.required],
      description:['',Validators.required],
      dificulty:['',Validators.required],
      ingredients:this.fb.array([])
    })
  }

  ionViewDidLoad() {
    this.mode=this.navParams.get('mode');
  }
  updateRecipe(){

  }
  private  createNewIngredientAlert(){
    return this.alertControl.create({
      title:'Add Ingredient',
      inputs:[{
        name:'name',
        placeholder:'Name'
      }],
      buttons:[{
        text:'Cancel',
        role:'cancel'
      },{
        text:'Add',
        handler:data=>{
          if(data.name.trim()=='' || data.name==null){
            return;
          }
          (<FormArray>this.recipeForm.get('ingredients')).push(new FormControl(data.name,Validators.required));
        }
      }]
    })
  }
  onManageIngrediant(){
    const actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Add Ingredient',
          handler: () => {
            this.createNewIngredientAlert().present();
          }
        },{
          text: 'Remove All Ingredient',
          role: 'destructive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
