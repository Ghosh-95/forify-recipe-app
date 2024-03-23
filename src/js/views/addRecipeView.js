import View from "./view.js";
import icons from '../../img/icons.svg';


class AddRecipeView extends View {
    _parentElement = document.querySelector('.upload');
    _message = 'Your recipe was successfuly uploaded. ;)';

    _overlay = document.querySelector('.overlay');
    _addRecipeWindow = document.querySelector('.add-recipe-window');
    _btnClose = document.querySelector('.btn--close-modal');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');

    constructor() {
        super();
        this._showAddRecipeHandler();
        this._hideAddRecipeHandler();
    };

    toggleWindow() {
        this._overlay.classList.toggle('hidden');
        this._addRecipeWindow.classList.toggle('hidden');
    };

    _showAddRecipeHandler() {
        this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
    };

    _hideAddRecipeHandler() {
        this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
        this._overlay.addEventListener('click', this.toggleWindow.bind(this));

    };

    addUploadRecipeHandler(handler) {
        this._parentElement.addEventListener('submit', function (e) {
            e.preventDefault();

            // new FormData(form) is a modern way of getting all the values from a Form after submit.
            const dataArr = [...new FormData(this)]; // Returns a 2-D array => [[inputName, inputValue], [inputName, inputValue], ...];
            const data = Object.fromEntries(dataArr); // Object.fromEntries(arr) creates an object based on the arr; [opposite of Object.entries]

            handler(data);
        });
    };

    _generateMarkup() {

    };
};

export default new AddRecipeView();