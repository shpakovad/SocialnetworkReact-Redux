

import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormControls";

const maxLength100 = maxLengthCreator(100)

const AddMessageForm =(props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength100]}
                       name='newMessageBody'
                       placeholder='Enter your message' />
            </div>
            <div> <button > Send</button> </div>
        </form>
    )
}

export default reduxForm({form:'AddMessageForm'})(AddMessageForm)