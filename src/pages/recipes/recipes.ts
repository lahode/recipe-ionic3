import { Component } from '@angular/core';
import { IonicPage, NavController } from "ionic-angular";

import { Recipe } from "../../models/recipe";
import { RecipesProvider } from "../../providers/recipes";

/**
 * Generated class for the RecipesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html'
})
export class RecipesPage {
  recipes: Recipe[];

  constructor (private navCtrl: NavController,
               private recipesProvider: RecipesProvider) {}

  ionViewWillEnter() {
    this.recipes = this.recipesProvider.getRecipes();
  }

  onNewRecipe() {
    this.navCtrl.push("EditRecipePage", {mode: 'New'});
  }

  onLoadRecipe(recipe: Recipe, index: number) {
    this.navCtrl.push("RecipePage", {recipe: recipe, index: index});
  }
}
