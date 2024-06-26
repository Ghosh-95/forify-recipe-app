import icons from '../../img/icons.svg';
import previewVew from './previewVew';
import View from './view';

class BookmarkView extends View {
    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';

    addHandlerRender(handler) {
        window.addEventListener('load', handler);
    };

    _generateMarkup() {
        return this._data.map(bookmark => previewVew.render(bookmark, false)).join('');
    };
};

export default new BookmarkView();