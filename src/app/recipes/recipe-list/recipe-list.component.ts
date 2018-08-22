import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg'),
    new Recipe('A Test Recipe', 'This is a test', 'https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }


}
