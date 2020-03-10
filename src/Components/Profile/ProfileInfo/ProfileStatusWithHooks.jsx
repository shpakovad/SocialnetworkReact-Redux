import React, {useState, useEffect} from 'react';
import s from './ProfileInfo.module.css'


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activatedEditMode = () => {
        setEditMode(true)
    };
    const deActivatedEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <div>

            {!editMode &&
            <div className={s.wrapperStatus}>

                <b> </b> <span className={s.status}
                               onDoubleClick={activatedEditMode}> {props.status || '---------'}  </span>
            </div>
            }
            {editMode &&
            <div>
                <input value={status}
                       onChange={onStatusChange}
                       autoFocus={true}
                       onBlur={deActivatedEditMode}/>
            </div>
            }
        </div>
    )
};

export default ProfileStatusWithHooks;