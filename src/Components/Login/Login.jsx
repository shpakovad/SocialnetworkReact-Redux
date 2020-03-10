import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from '../../common/FormsControls/FormControls.module.css';
import s from './Login.module.css'


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <div>


            <div className={s.wrapperTestsData}> <span> Please, enter  </span>
                 <span> test email : free@samuraijs.com </span>
                  <span> test login : free </span>
                    </div>

        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            <div className={s.rememberMe}>
                {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
            </div>
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField('Symbols from image', 'captcha', [required], Input, {})}

            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button className={s.loginButtonRegistration}>Login</button>
            </div>
        </form>

        </div>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1 className={s.login}> Login </h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
};

export default connect(mapStateToProps, {login})(Login)