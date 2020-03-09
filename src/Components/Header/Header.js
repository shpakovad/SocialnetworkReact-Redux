import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import cat from '../../assets/images/cat.svg'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src={cat}/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div> {props.login}
                        <button onClick={props.logout}>Log out</button>
                    </div>
                    : <NavLink className={s.loginBtnRegistration} to={'/login'}> Login </NavLink>}
            </div>
        </header>
    )
};

export default Header;







