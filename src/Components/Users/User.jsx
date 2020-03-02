import React from 'react';
import styles from "./Users.module.css";
import userPhoto from '../../assets/images/userPhoto.svg' ;
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div className={styles.userWrapper}>
 <span>
<div>
    <NavLink to={'/profile/' + user.id}>
<img alt ='' src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto}/>
    </NavLink>
    </div>
<div>
{user.followed
    ? <button className={styles.followingBtn} disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
        unfollow(user.id)

    }}> Unfollow </button>
    : <button className={styles.followingBtn} disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
        follow(user.id)

    }}> Follow </button>}
</div>
</span>
            <span>
<span>
<div className={styles.userName}>  {user.name} </div>
<div>  {user.status} </div>
</span>
<span>
<div className={styles.userLocation}>  {"user.location.country"} </div>
<div className={styles.userLocation}>  {"user.location.city"} </div>
</span>
</span>
        </div>)

};

export default User