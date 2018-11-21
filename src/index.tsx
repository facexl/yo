
import * as ReactDOM from 'react-dom';
import '~/index.css';
import page from '~/router/index';
import registerServiceWorker from '~/registerServiceWorker';
import '~/common/initGlobalMethods';
import '~/common/fetch';

ReactDOM.render(
    page,
    document.getElementById('root')
);
registerServiceWorker();
