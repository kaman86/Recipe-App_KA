import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Butter Chicken', 'This is simply a test', 'http://goodtoknow.media.ipcdigital.co.uk/111/000016ef4/543a_orh412w625/Butter-chicken-recipe.jpg'),
    new Recipe('Spaghetti & Meatballs', 'This is simply a test', 'http://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2015/5/15/0/CCTIA105_spaghetti-and-turkey-meatballs-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1431697043066.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeEl: Recipe) {
    this.recipeWasSelected.emit(recipeEl);
  }
}
