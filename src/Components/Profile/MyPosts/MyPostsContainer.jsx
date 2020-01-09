import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator} from "../../../redux/profileReducer";



let mapStateToProps= (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
    };

    let mapDispatchToProps= (dispatch) => {
        return {
        //     updateNewPostText: (text) => {let action = updateNewPostTextActionCreator(text)
        // dispatch(action)},
        addPost: (newPostText) => {dispatch(addPostActionCreator(newPostText))}
        }
    };

const MyPostsContainer= connect(mapStateToProps,mapDispatchToProps) (MyPosts);
export default MyPostsContainer;



