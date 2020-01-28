import React, {Component} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./common/preloader/preloader";


class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div
                    className='app-wrapper-content'>                {/*  Это общий стиль для всех страничек(серединка. Профайл и Диалоги). Этот стиль будет в App.css */}
                    {/* <Route path='/dialogs' component={Dialogs} />                               у нас получается ,что Навбар и Хэдэр на каждой страничке остается прежним, а середина меняется
                     <Route path='/profile' component={Profile} />                     специальная компонента, отвечающая за то, что при клике переходим на др. страничку. Т.к. в этом проекте ссылочные будут только две менюшки (два маршрута) (Profile,Message), то вводим две компоненты такие */}
                    {/* Route видет путь /dialogs и открывает компоненту Dialogs */}
                    {/* тоже самое: */}
                    {/* так сделали, потому что нам надо сюда перенести все данные, а их, в свою очередь надо передать компонентам, но выше, там где атрибут cjmponent, получается,что нет у нас компонент, а ссылки как бы, */}
                    {/* поэтому сделаи так,что бы были компоненты. Это две идентичных записи */}
                    {/* <Route path='/dialogs' render={() => <Dialogs dialogs={props.appState.dialogsPage.dialogs} messages={props.appState.dialogsPage.messages} />} />
                    <Route path='/profile' render={() => <Profile posts={props.appState.profilePage.posts} />} /> */}

                    <Route path='/dialogs' render={() =>
                        <DialogsContainer/>}/> {/*не писали последних свойств,т.к.они и так все упакованы в dialogsPage и profilePage  */}
                    <Route path='/profile/:userId?' render={() =>
                        <ProfileContainer/>}/> {/*userId-параметр,с?-т.е., этот пар-р может быть,может не быть. Его не будет, если мы в собственном профиле*/}
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);


//все теги превращаются в dom-элементы, объекты. JSX-разметку удобнее писать ,чем document.createElement

//КОММЕНТАРИЙ - правый ctr+shift+.
//Импорт - Alt+Enter
//выровнять - Ctrl+K+F        Ctrl+Alt+L
//Найти файл - Ctrl+Shift+N
//Продублировать - Ctrl + D
//КОММЕНТАРИЙ в JSX разметке - Ctrk+K+S
//Найти все файлы, в которых используется компанента - Ctrl+F7
//Продубоировать строку - Ctrl+D
//Перейти на нужную компаненту - Ctrl+click

// npm i react-router-dom -save - установка роутинга(что бы при клике переходило на другие страницы) - обязательно писать save, не просто установить, а внести в файл package.json. Эта папка характерезует все наши проекты
// save - для того, что бы когда закинули на репозиторий - все работало.
//когда например, сачиваем чужой проект-перед началом вводим npm install,что бы все подгрузилось и прочиталось в package.json
// 'react' библиотека с папки node models

//bandle.js - это тот файл, куда склеиваются App.js, index.js
//<Route /> - специальная компонента, отвечающая за то, что при клике переходим на др. страничку. Т.к. в этом проекте ссылочные будут только две менюшки (два маршрута) 
// (Profile,Message), то вводим две компоненты такие


// Index.js рендерит App
//В App мы встраиваем большой BrowserRouter.Что бы при клике страницы перезагружались
//API - интерфейс какой-то программы. Интерфейс-что-то,что позволяет нам взаимодействовать с чем-то

//Интерфейс объекта- это то, как с объектом взаимодействуем
//Интерфейс ф-ции- это то, как с ф-цией взаимодействуем (какие параметры у ф-ции, что передаем и т.д.)
//Context нужен для того, что бы с App поочередно не перебрасывать через каждую компоненту/подкомпоненту store, а просто с App сразу перебросить до нужной нам самой низкоуровневой компонеты этот store