import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

const baguette = 'https://images.pexels.com/photos/103657/' +
  'baguette-bread-herb-baguette-frisch-103657.jpeg?cs=srgb&dl=baguette-baked-goods-bread-103657.jpg&fm=jpg';
const pasta = 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Mmm..._pretty_summer_salad_%286005733739%29.jpg';
const fruit = 'https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg';
const soup = 'https://c.pxhere.com/photos/9d/f4/tom_kha_gai_soup_asia_thailand_chili-1415918.jpg!d';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Fruit Salad', 'With bananas and apples', fruit),
    new Recipe('Soup', 'With tomatoes', soup),
    new Recipe('Baguette', 'Italic bread', baguette),
    new Recipe('Pasta', 'With vegetables', pasta)
  ];

  constructor() { }

  ngOnInit() {
  }

}
