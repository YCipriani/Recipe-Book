import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
  new Recipe('Schnitzel', 'A schnitzel is a thin slice of meat fried in fat. Using this recipe can prepare delicious schnitzel in less than a half an hour of cooking and prep time',
   'https://toriavey.com/images/2011/02/IMG_1544.jpg'),
  new Recipe('Shakshuka', 'Shakshuka is a dish of eggs poached in a sauce of tomatoes. This recipe is extremely simple and only takes 40 minutes to make (total time)', 'https://feelgoodfoodie.net/wp-content/uploads/2018/10/Shakshuka-Recipe-4.jpg')
  ];
  @Output() theRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect(recipe: Recipe) {
    this.theRecipe.emit(recipe);
  }

}
