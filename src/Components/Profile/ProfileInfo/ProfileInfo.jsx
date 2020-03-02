import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/userPhoto.svg'
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner,savePhoto, saveProfile}) => {

    let [editMode,setEditMode]=useState(false);


    // useEffect(()=>{
    //     setStatus(props.status)
    // },[props.status])


    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected =(e) =>{
        if (e.target.files.length) {
           savePhoto(e.target.files[0])
        }
    };
    const onSubmit = (formData) => {
        saveProfile(formData)
    };

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.mainPhoto} src={profile.photos.large || userPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                {editMode ? <ProfileDataForm profile={profile} onSubmit={onSubmit} /> :
                    <ProfileData profile={profile}
                                 isOwner={isOwner}
                                 goToEditMode={()=>{setEditMode(true)}}/> }

                <ProfileStatusWithHooks status={status}
                                        updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

const ProfileData= ({profile,isOwner,goToEditMode}) =>{
   return <div className={s.selfData}>
    { isOwner &&  <div> <button onClick={goToEditMode}> Edit </button> </div>}
        <div> <b> Full name </b>: {profile.fullName} </div>
        <div> <b> Looking for a job </b>: {profile.lookingForAJob ? 'yes' : 'no'}
            {profile.lookingForAJob &&
            <div> <b> My professionals skills </b>: {profile.lookingForAJobDescription} </div>
            }
        </div>
        <div> <b> Contacts </b>: {Object.keys(profile.contacts).map(key=>{
            return   <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })} </div>
        <div> <b> About me </b>: {profile.aboutMe} </div>
    </div>
};






const Contact =({contactTitle,contactValue})=> {
    return <div className={s.contact}> <b>{contactTitle}</b>:{contactValue}</div>
};





export default ProfileInfo;



