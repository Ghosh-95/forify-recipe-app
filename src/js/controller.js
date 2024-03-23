import { async } from "regenerator-runtime";
import * as model from './model.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeViews from "./views/recipeViews.js";
import searchView from "./views/searchView.js";
import resultView from "./views/resultView.js";
import paginationView from "./views/paginationView.js";
import bookmarkView from "./views/bookmarkView.js";
import addRecipeView from "./views/addRecipeView.js";
import { MODAL_CLOSE_SEC } from "./config.js";

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    // Rendering spinner
    recipeViews.renderSpinner();

    // 1. Loading recipe
    await model.loadRecipe(id);

    // 2. Mark the selected recipe (both in result view and bookmarks view)
    resultView.update(model.getSearchResultsPerPage());
    bookmarkView.update(model.state.bookmarks);

    // 3. Rendering recipe
    recipeViews.render(model.state.recipe);

  } catch (error) {
    console.log(`${error} 💥💥💥`);
    recipeViews.renderError();
  };
};

async function controlSearchResults() {

  try {

    resultView.renderSpinner();

    const query = searchView.getQuery();
    if (!query) return;

    // Get search query from input
    await model.loadSearchResults(query);

    // 2. Render the search results
    // resultView.render(model.state.search.results);
    resultView.render(model.getSearchResultsPerPage());

    // 3. Render pagination view
    paginationView.render(model.state.search);

  } catch (error) {
    // console.log(`${error} ‼️`);
    resultView.renderError();
  };
};

function controlPagination(goToPage) {
  // 1. Render new search results
  resultView.render(model.getSearchResultsPerPage(goToPage));

  // 2. Render pagination view
  paginationView.render(model.state.search);
};

function controlServings(newServings) {
  // Update the servings in page
  model.updateServings(newServings);

  // Render recipe view.
  recipeViews.update(model.state.recipe);
};

function controlBookmark() {

  // Add/remove bookmarks
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // Update the recipe view
  recipeViews.update(model.state.recipe);

  // Render the bookmarks
  bookmarkView.render(model.state.bookmarks);
};

function renderLoadedBookmarks() {
  bookmarkView.render(model.state.bookmarks);
};

async function controlAddRecipe(newRecipe) {
  try {
    addRecipeView.renderSpinner();

    // Upload new recipe
    await model.uploadRecipe(newRecipe);

    // Render new recipe to view
    recipeViews.render(model.state.recipe);

    // Render success message
    addRecipeView.renderMessage();

    // Render bookmarks view with new recipe
    bookmarkView.render(model.state.bookmarks);

    // Change the ID in the URL bar
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Close modal window after 2.5 sec
    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC);

  } catch (error) {
    console.error(`${error.message} 🤢🤮`)
    addRecipeView.renderError(`${error.message}`);
  }
};

(function () {
  bookmarkView.addHandlerRender(renderLoadedBookmarks);
  recipeViews.addHandler(controlRecipes);
  searchView.addHandler(controlSearchResults);
  paginationView.addHandlerClick(controlPagination.bind(this));
  recipeViews.addHandlerUpdateServings(controlServings.bind(this));
  recipeViews.addHandlerBookmark(controlBookmark);
  addRecipeView.addUploadRecipeHandler(controlAddRecipe);
})();