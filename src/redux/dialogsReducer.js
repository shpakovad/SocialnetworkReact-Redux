const SEND_MESSAGE = "dialogs/SEND-MESSAGE";

let initialState = {
    messages: [
        {id: 1, message: 'Hello! It is my first message!'},
        {id: 2, message: 'How are you??'},
        {id: 3, message: 'Hello!'},
    ],
    dialogs: [
        {name: 'Dasha', id: '1'},
        {name: 'Nastya', id: '2'},
        {name: 'Veronika', id: '3'},
        {name: 'Kristina', id: '4'},
        {name: 'Darya', id: '5'}
    ],

};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE :
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}],
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer