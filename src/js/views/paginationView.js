import View from "./view.js";
import icons from '../../img/icons.svg';


class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');
    _errorMessage = 'No recipes found for your query! Please try again.';
    _currentPage;

    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function (e) {
            const btn = e.target.closest('.btn--inline');
            const goToPage = +btn?.dataset.page;

            handler(goToPage);
        })
    };

    _generateMarkup() {
        this._currentPage = this._data.page;

        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

        // Page 1 and there are other
        if (this._currentPage === 1 && numPages > 1) {
            return `${this._generateCommonMarkup('next')}`;
        }

        // Last page
        if (numPages === this._currentPage && numPages > 1) {
            return `${this._generateCommonMarkup('prev')}`;
        }

        // Middle Pages
        if (this._currentPage < numPages) {
            return `${this._generateCommonMarkup('next')}${this._generateCommonMarkup('prev')}`;
        };

        return ' ';
    };

    _generateCommonMarkup(direction) {
        return `
        <button class="btn--inline pagination__btn--${direction}" data-page="${direction === 'next' ? this._currentPage + 1 : this._currentPage - 1}">
            ${direction === 'next' ?
                `<span>Page ${this._currentPage + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>` :
                `<svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._currentPage - 1}</span>`}
        </button>
        `;
    };
};

export default new PaginationView();