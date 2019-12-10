import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core'

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'A schnitzel is a thin slice of meat fried in fat. Using this recipe can prepare delicious schnitzel in less than a half an hour of cooking and prep time',
         'https://toriavey.com/images/2011/02/IMG_1544.jpg',
        [new Ingredient('Egg', 1),
        new Ingredient('Mustard', 1)]),
        new Recipe('Shakshuka', 'Shakshuka is a dish of eggs poached in a sauce of tomatoes. This recipe is extremely simple and only takes 40 minutes to make (total time)', 'https://feelgoodfoodie.net/wp-content/uploads/2018/10/Shakshuka-Recipe-4.jpg',
        [new Ingredient('Tomatoes', 5),
        new Ingredient('Onion', 1)])
        ];

    getRecipes() {
        return this.recipes.slice();//slice function creates a copy of the recopes array
    }
}