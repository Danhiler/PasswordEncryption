import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { appService } from "./appService";
appService.init();
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
registerServiceWorker();
//# sourceMappingURL=index.js.map