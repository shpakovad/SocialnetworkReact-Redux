import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/preloader/preloader";
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img src='https://img5.goodfon.ru/wallpaper/nbig/6/86/death-valley-superbloom-priroda.jpg' alt=''/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                {/*<div>ava+description</div>*/}
                <ProfileStatusWithHooks status={props.status}  updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo;



