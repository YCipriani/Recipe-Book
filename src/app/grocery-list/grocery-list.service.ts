import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core'

export class GroceryListService {
    ingredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Chicken', 300),
        new Ingredient('Breadcrumbs', 75)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}