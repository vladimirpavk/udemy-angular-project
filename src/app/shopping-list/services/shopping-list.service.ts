import { Ingridient } from '../../shared/ingridient.model';

export class ShoppingListService{
    private ingridients: Ingridient[] = [
        new Ingridient('Apples', 5),
        new Ingridient('Tomatoes', 10)
      ];
    
    public getIngridients():Ingridient[] {
        return this.ingridients;
    }

    public addIngridient(ingridient:Ingridient):void{
        this.ingridients.push(ingridient);
    }

}