import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SamuraiJSApp from "./App";
// import state, {subscribe} from './redux/state';
import { BrowserRouter} from 'react-router-dom';  // экспортировали с библиотеки
// import {addPost, updateNewPostText} from './redux/state'
import store  from './redux/redux-store';
import {Provider} from 'react-redux';



    ReactDOM.render(

        <SamuraiJSApp />

            , document.getElementById('root'));






// rerenderEntireTree  (state);
// subscribe(rerenderEntireTree);

// ReactDOM.render(<App dialogs={dialogs} messages={messages}  posts={posts}/>, document.getElementById('root'));
// Оставили только state ,потому что все переменные упаковали в state, а до этого все данные лежали в этом файле



 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//FLUX- подход к организации потока данных
//Redux -реализация FLUX