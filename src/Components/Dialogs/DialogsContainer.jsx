import React from 'react';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import withAuthRedirect from '../../HOC/withAuthRedirect';
import {compose} from 'redux'
import {sendMessageCreator} from "../../redux/dialogsReducer";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        },
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
