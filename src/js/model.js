import { async } from "regenerator-runtime";

import { API_URL, KEY, RES_PER_PAGE } from "./config.js";
import { AJAX } from "./helper.js";

export const state = {
    recipe: {},
    search: {
        results: [],
        query: '',
        page: 1,
        resultsPerPage: RES_PER_PAGE,
    },
    bookmarks: [],
};

function createRecipeObj(data) {

    const recipeData = data.data.recipe

    return {
        id: recipeData.id,
        image: recipeData.image_url,
        ingredients: recipeData.ingredients,
        sourceUrl: recipeData.source_url,
        servings: recipeData.servings,
        title: recipeData.title,
        cookingTime: recipeData.cooking_time,
        publisher: recipeData.publisher,
        ...(recipeData.key && { key: recipeData.key }),
    };
};

export async function loadRecipe(id) {
    try {
        const data = await AJAX(`${API_URL}/${id}?key=${KEY}`);
        state.recipe = createRecipeObj(data);

        if (state.bookmarks.some(bookmark => bookmark.id === id)) state.recipe.bookmarked = true;

    } catch (error) {
        throw error;
    };

};

export async function loadSearchResults(query) {
    state.search.query = query;

    try {
        const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);

        state.search.results = data.data.recipes.map(recipeData => {
            return {
                id: recipeData.id,
                image: recipeData.image_url,
                publisher: recipeData.publisher,
                title: recipeData.title,
                ...(recipeData.key && { key: recipeData.key }),
            };
        });

        state.search.page = 1;

    } catch (error) {
        throw error;
    };
};

export function getSearchResultsPerPage(page = state.search.page) {
    state.search.page = page;

    const start = (page - 1) * RES_PER_PAGE;
    const end = page * RES_PER_PAGE;

    return state.search.results.slice(start, end);
};

export function updateServings(newServings) {

    state.recipe.ingredients.forEach(ing => {
        ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    });

    state.recipe.servings = newServings;
};

export function addBookmark(recipe) {

    state.bookmarks.push(recipe);

    // Mark current recipe as bookmarked
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

    storeBookmarks();
};

export function deleteBookmark(id) {
    const index = state.bookmarks.findIndex(bookmark => bookmark.id === id);

    state.bookmarks.splice(index, 1);

    if (id === state.recipe.id) state.recipe.bookmarked = false;

    storeBookmarks();
};

function storeBookmarks() {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks))
};

(function () {
    const bookmarkStored = localStorage.getItem('bookmarks');

    if (bookmarkStored) state.bookmarks = JSON.parse(bookmarkStored);
})();

(function () { localStorage.clear() })//();

export async function uploadRecipe(newRecipe) {
    try {
        const ingredients = Object.entries(newRecipe)
            .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
            .map(ing => {
                const ingArr = ing[1].split(',').map(el => el.trim());

                if (ingArr.length !== 3) throw new Error('Incorrect ingredient format! Please use quantity, unit, description format.');

                const [quantity, unit, description] = ingArr;

                return { quantity: quantity ? +quantity : null, unit, description };
            })

        const recipe = {
            image_url: newRecipe.image,
            source_url: newRecipe.sourceUrl,
            servings: +newRecipe.servings,
            title: newRecipe.title,
            cooking_time: +newRecipe.cookingTime,
            publisher: newRecipe.publisher,
            ingredients,
        }

        const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
        state.recipe = createRecipeObj(data);
        addBookmark(state.recipe);

    } catch (error) {
        throw error;
    }
};