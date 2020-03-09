export const required =value => {
    if(value) return undefined;
    return 'Field is required'
};

export const  maxLengthCreator =(maxLength) => (value) => {
    if(value && value.length>maxLength) return `Max length is ${maxLength} symbols`;
    return undefined
};

// export const validate = values => {
//     const errors = {}
//     if (!values.aboutMe) {
//         errors.aboutMe = 'Required'
//     } else if (values.aboutMe.length > 5) {
//         errors.aboutMe = 'Must be 15 characters or less'
//     }
//     return errors
// }

