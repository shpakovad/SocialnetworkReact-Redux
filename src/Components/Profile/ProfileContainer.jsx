import React from 'react';
import Profile from "./Profile";
import  axios from "axios";
import {getStatus, getUsersProfile, savePhoto, setUserProfile, updateStatus} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {compose} from 'redux';


class ProfileContainer extends React.Component {

    refreshProfile () {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId=this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push('/login')
            }
        };
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId)
    }

  componentDidMount() {
   this.refreshProfile()

      // usersAPI.getProfile(userId)
      //     .then(response => {
      //     this.props.setUserProfile(response.data);
      // });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
      if(this.props.match.params.userId !== prevProps.match.params.userId) {
          this.refreshProfile()
      }
  }

    render() {

        return (
            <Profile {...this.props}
                isOwner = {!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}/>
        )
    }
};




// compose (
//     withRouter,
//     connect(mapStateToProps,{getUsersProfile}),
//     withAuthRedirect
// )(ProfileContainer)

// let AuthRedirectComponent =  withAuthRedirect(ProfileContainer)


let mapStateToProps =(state) => ({
    profile:state.profilePage.profile,
    status:state.profilePage.status,
    authorizedUserId:state.auth.userId,
    isAuth:state.auth.isAuth
});

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default compose (
    connect(mapStateToProps,{getUsersProfile,getStatus,updateStatus, savePhoto}),
    withRouter
    // withAuthRedirect
)(ProfileContainer)



