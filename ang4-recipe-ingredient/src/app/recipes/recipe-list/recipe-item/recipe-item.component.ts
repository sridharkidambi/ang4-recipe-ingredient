import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from "app/recipes/recipe-model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input('recipeItem') item:Recipe;
 @Output() recipeSelected=new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onSelected(){
this.recipeSelected.emit();
  }

}
