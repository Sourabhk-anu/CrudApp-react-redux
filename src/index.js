import React from 'react';
import ReactDom from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App'
import store from './app/store'
import './index.css'
// import UserReducer from './UserReducer';

// const store = configureStore({
//     reducer: {
//         users: UserReducer
//     }
// })

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)