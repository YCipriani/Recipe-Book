import { GroceryListService } from './grocery-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private groceryListService: GroceryListService) { }

  ngOnInit() {
    this.ingredients = this.groceryListService.getIngredients();
    this.groceryListService.ingredientChanged.subscribe((ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
      }
    ); 
  }
}
