import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE"


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
//     addPost() {   //экспортируем сразу без default в index.js в {}
//     let newPost={
//         id:5,
//         message:this._state.profilePage.newPostText,
//         likesCount:0
//     };
//     this._state.profilePage.posts.push(newPost);
//     this._state.profilePage.newPostText=''
//     this._callSubscriber(this._state);
// },
// updateNewPostText(newText) {
//     this._state.profilePage.newPostText=newText;
//     this._callSubscriber(this._state)
// },
subscribe(observer) {
    this._callSubscriber=observer //наблюдатель
},
dispatch(action) { //action- объект,который описывает, какое действие сообщить

    this._state.profilePage=profileReducer(this._state.profilePage,action)
    this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action)
    this._state.sidebar=sidebarReducer(this._state.sidebar,action)

//     if (action.type===ADD_POST) {
//     let newPost={
//         id:5,
//         message:this._state.profilePage.newPostText,
//         likesCount:0
//     };
//     this._state.profilePage.posts.push(newPost);
//     this._state.profilePage.newPostText=''
//     this._callSubscriber(this._state);
// }
// else if (action.type===UPDATE_NEW_POST_TEXT) {
   
//         this._state.profilePage.newPostText=action.newText;
//         this._callSubscriber(this._state)
// }
// else if (action.type===UPDATE_NEW_MESSAGE_BODY) {
//     this._state.dialogsPage.newMessageBody=action.body;
//     this._callSubscriber(this._state)
// }
// else if (action.type===SEND_MESSAGE) {
//    let body = this._state.dialogsPage.newMessageBody;
//    this._state.dialogsPage.newMessageBody ='';
//    this._state.dialogsPage.messages.push( { id: 4, message: body })
    this._callSubscriber(this._state)
}
}



// export const addPostActionCreator=() => ({
//         type:ADD_POST
// })
// export const updateNewPostTextActionCreator=(text) => ({
//         type:UPDATE_NEW_POST_TEXT, newText:text
// })
export const sendMessageCreator=() => ({
    type:SEND_MESSAGE
})
export const updateNewMessageBodyCreator=(body) => ({
    type:UPDATE_NEW_MESSAGE_BODY, body:body
})
window.store=store;
export default store


// export const addPost = () => {   //экспортируем сразу без default в index.js в {}
//     let newPost={
//         id:5,
//         message:state.profilePage.newPostText,
//         likesCount:0
//     };
// state.profilePage.posts.push(newPost);
// state.profilePage.newPostText=''
// rerenderEntireTree(state);
// };

// export const updateNewPostText =(newText) => {
//     state.profilePage.newPostText=newText;
//     rerenderEntireTree(state)
// };
//              //подписчик
// export const subscribe = (observer) => {
//      rerenderEntireTree=observer //наблюдатель
// }
// window.state=state;
// export default state

