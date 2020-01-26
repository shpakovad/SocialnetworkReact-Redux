import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'It is my first post', likesCount: 50},
        {id: 2, message: 'I am a beautiful', likesCount: 10},
        {id: 3, message: 'Do you have a cat?', likesCount: 0},
        {id: 4, message: 'Hello!', likesCount: 5}
    ],

};

it('length of posts should be incremented', () => {
    let action = addPostActionCreator('it-kamasutra');


    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);

})

it('massages of new post  should be correct', () => {
        let action = addPostActionCreator('it-kamasutra');

        let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe('it-kamasutra')
})


it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3)
})


it('after deleting length should not be decrement if id is incorrect', () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4)
})
