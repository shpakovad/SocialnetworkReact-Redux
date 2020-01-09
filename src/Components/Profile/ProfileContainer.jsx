import React from 'react';
import Profile from "./Profile";
import  axios from "axios";
import {getStatus, getUsersProfile, setUserProfile, updateStatus} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {compose} from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount() {
      let userId = this.props.match.params.userId;
      if(!userId) {
          userId=this.props.authorizedUserId;
          if(!userId) {
              this.props.history.push('/login')
          }
      };
      this.props.getUsersProfile(userId);
      this.props.getStatus(userId)
      // usersAPI.getProfile(userId)
      //     .then(response => {
      //     this.props.setUserProfile(response.data);
      // });
  };

    render() {

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus} />
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
    connect(mapStateToProps,{getUsersProfile,getStatus,updateStatus}),
    withRouter
    // withAuthRedirect
)(ProfileContainer)



