import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Chicken', 300),
    new Ingredient('Breadcrumbs', 75)
  ];

  constructor() { }

  ngOnInit() {
  }

}
