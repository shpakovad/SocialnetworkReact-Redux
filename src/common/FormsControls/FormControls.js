import React from 'react';
import s from './FormControls.module.css';
import {Field} from "redux-form";
import {required} from "../../utils/validators/validators";



const FormControl=({input,meta,child, ...props})=> {
    const hasError = meta.touched &&  meta.error;
    return (
        <div className={s.formControl + ' ' +( hasError ?
            s.error: '')}>
            <div>
                {props.children}
            </div>
            {hasError &&  <span> {meta.error}</span>}
        </div>
    )
};


export const Textarea = (props) => {
    const {input,meta,child, ...restProps}=props;
    return (
<FormControl {...props} >
                <textarea className={s.wrapperTextarea} {...input} {...restProps} />
</FormControl>

    )
};

export const Input = (props) => {
    const {input,meta,child, ...restProps}=props;
    return (
        <FormControl {...props} >
                <input {...input} {...restProps} />
        </FormControl>
    )
};

