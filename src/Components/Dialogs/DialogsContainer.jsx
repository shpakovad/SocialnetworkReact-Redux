import React from 'react';
import {sendMessageCreator } from '../../redux/store'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import withAuthRedirect from '../../HOC/withAuthRedirect';
import {compose} from 'redux'

let mapStateToProps= (state) => {
return {
    dialogsPage: state.dialogsPage,
    isAuth:state.auth.isAuth
}
};
let mapDispatchToProps= (dispatch) => {
    return {
      sendMessage:(newMessageBody)=> {
          dispatch(sendMessageCreator(newMessageBody))
      },
      // updateNewMessageBody:(body)=> {
      //     dispatch(updateNewMessageBodyCreator(body))
      // }
    }
};



// let AuthRedirectComponent =  withAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (AuthRedirectComponent);

export default compose (
    connect(mapStateToProps,mapDispatchToProps),
     withAuthRedirect
)(Dialogs)
