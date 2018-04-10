import { Output, EventEmitter } from '@angular/core';

import { Ingridient } from '../../shared/ingridient.model';

export class ShoppingListService{

    @Output() public newIngridientAdded:EventEmitter<Ingridient[]> = new EventEmitter<Ingridient[]>();

    private ingridients: Ingridient[] = [
        new Ingridient('Apples', 5),
        new Ingridient('Tomatoes', 10)
      ];
    
    public getIngridients():Ingridient[] {
        return this.ingridients.slice();
    }

    public addIngridient(ingridient:Ingridient):void{
        this.ingridients.push(ingridient);
        this.newIngridientAdded.emit(this.ingridients.slice());
    }

}