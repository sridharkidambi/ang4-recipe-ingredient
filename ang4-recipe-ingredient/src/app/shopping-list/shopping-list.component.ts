import { Component, OnInit } from '@angular/core';
import { Ingredient } from "app/shared/ingredients.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Array<Ingredient>=[
  new Ingredient("rice",5),
  new Ingredient("uraddall",1),
  new Ingredient("puffedrice",1)
];
  constructor() { }

  ngOnInit() {
  }

}
