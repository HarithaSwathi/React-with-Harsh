/* import ReactDOM from 'react-dom/client';
import Main from './Main';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <Main />

); */


import ReactDOM from 'react-dom/client';
import App from './App';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import ProductReducer from './redux/reducers';

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(ProductReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)