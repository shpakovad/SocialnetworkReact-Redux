import React from 'react';
import s from './FormControls.module.css';
import {Field} from "redux-form";

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

// const warn = values => {
//     const warnings = {}
//     if (values.age < 19) {
//         warnings.age = 'Hmm, you seem a bit young...'
//     }
//     return warnings
// }


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

export const createField = (placeholder, name, validators, component, props = {}, text="")=> (
    <div>
        <Field placeholder={placeholder} name={name}
                            validate={validators}
                            component={component}
            {...props} /> {text}
    </div>
);

