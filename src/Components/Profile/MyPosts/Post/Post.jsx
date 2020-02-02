import React from 'react';
import s from './Post.module.css'
import like from '../../../../assets/images/like.svg'
const Post = (props) => {
    return (

        <div className={s.item}>
            <img className={s.iconUser} src='https://avatars.mds.yandex.net/get-pdb/812271/11fbe7bf-4689-4f95-839f-9451e3d26c0a/s375' alt =''/>

          {props.message}

        <div>
                <span className={s.likeText}>
                    <img className={s.like} src={like}/> {props.likesCount}
                     </span>
            </div>
        </div>
    )
}
export default Post;
//т.к. Посты у нас будут меняться (это динамические штуки), то мы сначала в Posts сделали атрибут message :  <Post message='Hello, how are you?' />,
//эти посты передаем в компоненту Post (это каждый отдельный пост) вместе с props. Т.е., взяли атрибут + пропс: message.props
// props всегда передаются с атрибутами. Например: <Post message='Hello, how are you?' /> , а сюда передаем это сообщение 
//'Hello, how are you?' как  {props.message}
