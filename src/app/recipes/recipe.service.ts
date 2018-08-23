import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

const FRUIT = 'https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg';
const PASTA = 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Mmm..._pretty_summer_salad_%286005733739%29.jpg';
const SOUP = 'https://c.pxhere.com/photos/9d/f4/tom_kha_gai_soup_asia_thailand_chili-1415918.jpg!d';
const BAGUETTE = 'https://images.pexels.com/photos/103657/' +
  'baguette-bread-herb-baguette-frisch-103657.jpeg?cs=srgb&dl=baguette-baked-goods-bread-103657.jpg&fm=jpg';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // new Recipe(name, description, path, ingredients [])
  // new ingredients(name, amount)

  private recipes: Recipe[] = [
    new Recipe('Fruit', 'Fruit Salad', FRUIT, [new Ingredient('Apple', 3), new Ingredient('Banans', 4)]),
    new Recipe('Baguette', 'Italic Bread', BAGUETTE, [new Ingredient('Water', 100), new Ingredient('Italian', 1)]),
    new Recipe('Pasta', 'With Salad', PASTA, [new Ingredient('Vegetables', 3), new Ingredient('Pasta', 1)]),
    new Recipe('Soup', 'Tasty & Hot', SOUP, [new Ingredient('Water', 3), new Ingredient('Taste', 1)])
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
