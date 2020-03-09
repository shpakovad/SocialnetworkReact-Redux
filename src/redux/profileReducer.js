import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET-USER-PROFILE";
const SET_STATUS = "profile/SET-STATUS";
const DELETE_POST = 'profile/DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE-PHOTO-SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'It is my first post', likesCount: 50},
        {id: 2, message: 'I am a beautiful', likesCount: 10},
        {id: 3, message: 'Do you have a cat?', likesCount: 0},
        {id: 4, message: 'Hello!', likesCount: 5}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
               profile: {...state.profile, photos:action.photos}
            }
        }
        default:
            return state
    }

};
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});


export const getUsersProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
 try {   let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
 } catch(error) {
alert ('error')
 }
};
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};
export const saveProfile = (profile) => async (dispatch,getState) => {
   const userId =  getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
         dispatch(getUsersProfile(userId));
    } else {
         dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0] }))
        console.log(response.data)
        return Promise.reject(response.data.messages[0])
    }
};



export default profileReducer