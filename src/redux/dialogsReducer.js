
// const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState= {
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

}
 const dialogsReducer=(state=initialState,action) => {
     // stateCopy.messages=[...state.messages];
     switch (action.type) {
         // case UPDATE_NEW_MESSAGE_BODY:
         //  return {
         //         ...state,
         //         newMessageBody : action.body
         //     };
         case SEND_MESSAGE :
             let body = action.newMessageBody;
            return {
                 ...state,
                 messages: [...state.messages,{id: 4, message: body}],
             };
             // stateCopy.messages.push({id: 4, message: body})
         default:
             return state;
     }
 }
 export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE,newMessageBody})
// export  const  updateNewMessageBodyCreator= (body) =>
//     ({type: UPDATE_NEW_MESSAGE_BODY, body:body})

export default dialogsReducer