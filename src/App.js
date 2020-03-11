import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import './config/ReactotronConfig';
import store from './store';
import { ToastContainer } from 'react-toastify';
import history from './services/history';

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Header />
                <Routes />
                <GlobalStyle />
                <ToastContainer autoClose={3000}/>
            </Router>
        </Provider>
    );
}

export default App;
