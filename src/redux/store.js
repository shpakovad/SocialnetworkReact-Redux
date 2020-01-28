import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";


let store= {
    _state: {
        profilePage: {
    
            posts: [
                { id: 1, message: 'It is my first post', likesCount: 50 },
                { id: 2, message: 'I am a beautiful', likesCount: 10 },
                { id: 3, message: 'Do you have a cat?', likesCount: 0 },
                { id: 4, message: 'Hello!', likesCount: 5 }
            ],
            newPostText:'it-kamasutra'
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'What the fuck??' },
                { id: 2, message: 'How are you??' },
                { id: 3, message: 'Hello!' },
            ],
            dialogs: [
                { name: 'Dasha', id: '1' },
                { name: 'Nastya', id: '2' },
                { name: 'Veronika', id: '3' },
                { name: 'Kristina', id: '4' },
                { name: 'Darya', id: '5' }
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state was changed')
    },

subscribe(observer) {
    this._callSubscriber=observer //наблюдатель
},
dispatch(action) { //action- объект,который описывает, какое действие сообщить

    this._state.profilePage=profileReducer(this._state.profilePage,action)
    this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action)
    this._state.sidebar=sidebarReducer(this._state.sidebar,action)

    this._callSubscriber(this._state)
}
};

export const sendMessageCreator=() => ({
    type:SEND_MESSAGE
});
export const updateNewMessageBodyCreator=(body) => ({
    type:UPDATE_NEW_MESSAGE_BODY, body:body
});
window.store=store;
export default store

