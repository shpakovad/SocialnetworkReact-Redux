import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner} profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus}
                         saveProfile={props.saveProfile}/>
            <MyPostsContainer/> {/*у нас state уже содержит {props.appState.profilePage} , т.е. state={props.appState.profilePage} */}
        </div>
    )
};
export default Profile;



