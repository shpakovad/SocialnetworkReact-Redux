import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from '../../common/FormsControls/FormControls.module.css';
import s from './Login.module.css'


// const LoginForm = (props) => { внизу деструктуризация параметров
const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {/*<div>*/}
            {/*    <Field placeholder={'Email'} name={'email'}*/}
            {/*           component={Input}*/}
            {/*           validate={[required]}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Field placeholder={'Password'} name={'password'} component={Input}*/}
            {/*           validate={[required]} type={'password'}/>*/}
            {/*</div>*/}
            {/*<div className={s.rememberMe}>*/}
            {/*    <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember me*/}
            {/*</div>*/}
            {createField('Email','email',[required], Input)}
            {createField('Password','password',[required], Input, {type:'password'})}
          <div className={s.rememberMe}>
            {createField(null,'rememberMe',[], Input, {type:'checkbox'}, 'remember me')}
          </div>
            {captchaUrl && <img src={captchaUrl} />  }
            {captchaUrl &&  createField('Symbols from image','captcha',[required], Input, {})  }

            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
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
        captchaUrl:state.auth.captchaUrl
    }
};

export default connect(mapStateToProps, {login})(Login)