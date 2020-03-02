import React from 'react';
import s from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../../common/FormsControls/FormControls";
import {reduxForm} from "redux-form";



const ProfileDataForm= ({handleSubmit}) =>{
    return <form className={s.selfData} onSubmit={handleSubmit}>
        <div> <button> Save </button> </div>
        <div> <b> Full name </b>:
            {createField('Full name','fullName',[], Input)} </div>
        <div> <b> Looking for a job </b>:
            {createField('','lookingForAJob',[], Input,{type:'checkbox'})} </div>


            <div> <b> My professionals skills </b>:
        {createField('My professionals skills','lookingForAJobDescription',[], Textarea)} </div>

        {/*<div> <b> Contacts </b>: {Object.keys(profile.contacts).map(key=>{*/}
        {/*    return   <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />*/}
        {/*})} </div>*/}
        <div> <b> About me </b>:
            {createField('About me','aboutMe',[], Textarea)} </div>

        </form>
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm