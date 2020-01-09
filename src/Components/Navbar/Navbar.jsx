import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'  
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}> <NavLink  to ='/profile' activeClassName={s.activeLink}> Profile </NavLink> </div>   {/*вместо <a> ввели спец компоненту <NavLink>, которую тоже экспортировали,что бы страничка как бы не перезагружалась, а менялся только окончательный адрес  */}
            <div className={`${s.item} ${s.active}`}> <NavLink to='/dialogs' activeClassName={s.activeLink}> Messages </NavLink> </div>
            <div className={`${s.item} ${s.active}`}> <NavLink to ='/users' activeClassName={s.activeLink}> Users </NavLink> </div>
            <div className={s.item}> <a> News </a> </div>
            <div className={s.item}>  <a>Music </a>  </div>
            <div className={s.item}> <a> Settings </a>  </div>
        </nav>
    )
}
export default Navbar;


//Т.к., у нас есть еще один класс item (у компаненты Profile), то, что бы задавать им разные свойства - 
//мы ввели объект S , для того,что бы было видно, что именно у item компаненты Navbar такие свойства
//мы так введем несколько объектов для каждой компаненты, что бы каждый item был уникальный
//Т.Е., у каждой компаненты есть класс item, но в каждой компаненте он уникальный
//className={`${s.item} ${s.active}`} === class = 'item active'  - 2 класса у одного дива
// export DEFAULT - значит,что мы с файла экспортируем что-то одно, самое главное

