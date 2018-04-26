import { Output } from '@angular/core';

import { Ingridient } from '../../shared/ingridient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService{

    @Output() public newIngridientAdded:Subject<Ingridient[]> = new Subject<Ingridient[]>();
    @Output() public startedEditing:Subject<number> = new Subject<number>();
    @Output() public finishedEditing:Subject<boolean> = new Subject<boolean>();

    private ingridients: Ingridient[] = [
        new Ingridient('Apples', 5),
        new Ingridient('Tomatoes', 10)
      ];
    
    public getIngridients():Ingridient[] {
        return this.ingridients.slice();
    }

    public getIngridient(index:number):Ingridient{        
        return this.ingridients[index];
    }

    public addIngridient(ingridient:Ingridient):void{
        this.ingridients.push(ingridient);
        this.newIngridientAdded.next(this.ingridients.slice());
    }

    public updateIngridient(ingridient:Ingridient):void{
        this.ingridients.find(
            (ingridientEl:Ingridient)=>{
                if(ingridientEl.name==ingridient.name){                                  
                    this.ingridients[this.ingridients.indexOf(ingridientEl)].amount=ingridient.amount;
                    return true;
                }
                else{
                    //console.log("delIngridient false");
                    return false;
                }
            }            
        );
        this.finishedEditing.next(true);
    }

    public delIngridient(index:number):void{
        this.ingridients.splice(index,1);
        this.newIngridientAdded.next(this.ingridients.slice());
    }

}