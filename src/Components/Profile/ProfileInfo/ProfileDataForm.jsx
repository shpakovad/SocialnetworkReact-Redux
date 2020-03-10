import React from 'react';
import s from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../../common/FormsControls/FormControls";
import {reduxForm} from "redux-form";
import style from "../../../common/FormsControls/FormControls.module.css";
import {maxLengthCreator} from "../../../utils/validators/validators";


const maxLength40 = maxLengthCreator(40);
const maxLength50 = maxLengthCreator(50);
const ProfileDataForm = ({handleSubmit, profile, error}) => {

    return <form className={s.selfData} onSubmit={handleSubmit}>
        <div>
            <button className={style.saveBtn}> Save</button>
        </div>

        {error && <div className={style.formSummaryError}>
            {error}
        </div>}

        <div><b> Full name </b>:
           {createField('Full name', 'fullName', [], Input)}  </div>
        <div><b> Looking for a job </b>:
            {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})} </div>


        <div><b> My professionals skills </b>:

            {createField('My professionals skills', 'lookingForAJobDescription', [maxLength50], Textarea)}
        </div>

        <div><b> About me </b>:
            {createField('About me', 'aboutMe', [maxLength40], Textarea)}

        </div>

        <div><b> Contacts </b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}:
                    {createField(key, "contacts." + key, [], Input)}
                </b>
            </div>
        })} </div>
    </form>
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm