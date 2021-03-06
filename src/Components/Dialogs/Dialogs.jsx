import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map((item) => {
        return <DialogItem name={item.name} key={item.id} id={item.id}/>
    });
    let messagesElements = state.messages.map((item) => {
        return <Message key={item.id} message={item.message}/>
    });

    let addMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    if (!props.isAuth) return <Redirect to={"/login"}/>;
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>  {messagesElements} </div>
                </div>
            </div>
            <div className={s.wrapperTextarea}>
                <AddMessageForm onSubmit={addMessage}/>
            </div>
        </div>
    )
};


export default Dialogs;