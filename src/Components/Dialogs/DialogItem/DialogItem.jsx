import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import userPhotoDialogs from '../../../assets/images/userPhotoDialogs.svg'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.wrapperDialogs}>
        <img className={s.userPhoto} src={userPhotoDialogs}/>
        <div className={`${s.dialogs} ${s.active}`}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    </div>
};


export default DialogItem;