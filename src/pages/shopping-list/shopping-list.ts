import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NgForm } from "@angular/forms";

import { ShoppingListProvider } from "../../providers/shopping-list";
import { Ingredient } from "../../models/ingredient";

/**
 * Generated class for the ShoppingListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html'
})
export class ShoppingListPage {
  listItems: Ingredient[];

  constructor(private slProvider: ShoppingListProvider) {}

  ionViewWillEnter() {
    this.loadItems();
  }

  onAddItem(form: NgForm) {
    this.slProvider.addItem(form.value.ingredientName, form.value.amount);
    form.reset();
    this.loadItems();
  }

  onCheckItem(index: number) {
    this.slProvider.removeItem(index);
    this.loadItems();
  }

  private loadItems() {
    this.listItems = this.slProvider.getItems();
  }
}
