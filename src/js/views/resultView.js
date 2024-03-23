import icons from '../../img/icons.svg';
import previewVew from './previewVew';
import View from './view';

class ResultView extends View {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipes found for your query! Please try again.';

    _generateMarkup() {
        return this._data.map(result => previewVew.render(result, false)).join('');
    };
};

export default new ResultView();