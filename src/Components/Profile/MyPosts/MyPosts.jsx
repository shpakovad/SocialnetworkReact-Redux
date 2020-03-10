import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post.jsx'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormControls";


const MyPosts = React.memo(props => {

    let postsElements = props.posts.map((item) => {
        return <Post key={item.id} message={item.message} likesCount={item.likesCount}/>
    });

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    };

    return (

        <div className={s.postsBlock}>
            <h3 className={s.postsBlock}> My posts </h3>

            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const maxLength10 = maxLengthCreator(50);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       placeholder={'Post message'}
                       name='newPostText'
                       validate={[required, maxLength10]}/>
            </div>
            <div className={s.wrapperAddBtn}>
                <button>Add post</button>
            </div>
        </form>
    )
};

const AddNewPostFormRedux = reduxForm({form: 'AddNewPostForm'})(AddNewPostForm);

export default MyPosts;



