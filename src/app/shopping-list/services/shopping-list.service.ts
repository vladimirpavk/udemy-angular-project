import { Output } from '@angular/core';

import { Ingridient } from '../../shared/ingridient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService{

    @Output() public newIngridientAdded:Subject<Ingridient[]> = new Subject<Ingridient[]>();

    private ingridients: Ingridient[] = [
        new Ingridient('Apples', 5),
        new Ingridient('Tomatoes', 10)
      ];
    
    public getIngridients():Ingridient[] {
        return this.ingridients.slice();
    }

    public addIngridient(ingridient:Ingridient):void{
        this.ingridients.push(ingridient);
        this.newIngridientAdded.next(this.ingridients.slice());
    }

}