import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "app/recipes/recipe-model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

@Output() recipeWasSelected= new EventEmitter<Recipe>();
    recipes:Array<Recipe>=[
  new Recipe("Sambar Vada","recipe to make sambar vada","https://farm1.staticflickr.com/607/20981419973_e78d2d2ede_z.jpg")
,new Recipe("Idly","Recipe for Idly","http://www.indobase.com/recipes/rec-images/idli.jpg")  
,new Recipe("Pongal","Recipe to make Venn Pongal","https://i.ytimg.com/vi/coDQeOpmKCo/maxresdefault.jpg")];
  constructor() { }

  ngOnInit() {
  }
onRecipeSelected(item:Recipe){
this.recipeWasSelected.emit(item);
}

}
