import { GroceryListService } from './../grocery-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-grocery-edit',
  templateUrl: './grocery-edit.component.html',
  styleUrls: ['./grocery-edit.component.css']
})
export class GroceryEditComponent implements OnInit {
  @ViewChild('inputName', {static: false}) nameInput: ElementRef;
  @ViewChild('inputAmount', {static: false}) amountInput: ElementRef;

  constructor(private groceryListService: GroceryListService) { }

  ngOnInit() {
  }
  onAddItem() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.groceryListService.addIngredient(newIngredient);
  }
}
