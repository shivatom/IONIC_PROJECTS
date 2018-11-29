import { Ingrediant } from "../../models/ingrediant";

export class ShoppingListService{
    private ingrediantList:Ingrediant[]=[];

    addItem(name:string, amount:number){
        this.ingrediantList.push(new Ingrediant(name,amount));
        
    }

    addItems(items:Ingrediant[]){
        this.ingrediantList.push(...items);
    }


    getItem(){
        return this.ingrediantList;
    }

    removeItem(index){
        this.ingrediantList.splice(index,1)
    }
}