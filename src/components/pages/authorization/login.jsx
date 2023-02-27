import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  NavLink } from "react-router-dom";
import './style.css'

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const fetchLogin = useSelector(state => state)
  const onSubmit = async (event) => {
    event.preventDefault()

    const response = await fetch(fetchLogin.login, fetchLogin,password)
   if(response){

     console.log(response)
    }
    
  }
  return (
    <div className="popup">
      <div className="popup__body">
        <div className="popup__content">
          <NavLink to="/" className="close popup__close">
            X
          </NavLink>
          <div className="popup__title">Аторизация</div>
          <form onSubmit={onSubmit} className="form">
            <input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="label__input"
              type="email"
              placeholder="Ваш e-mail*"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="label__input password__input "
              type="password"
              placeholder="Ваш пароль*"
            />
            <div className="password__btn ">
              <img src="images/password-btn.svg" alt="" />
            </div>
            <div className="popup__password">
              {/* <a className="password__forgot popup__link" href="#popup__2">
                Забыли пароль?
              </a> */}
              <NavLink to="/Register" className="password__account popup__link">
                Нет аккаунта?
              </NavLink>
            </div>
            <button type="submit" className="auth__form__btn">
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
    //   <div  className="popup hidden">
    //     <div className="popup__body">
    //       <div className="popup__content">
    //         <a className="close popup__close" href="#">X</a>
    //         <div className="popup__title">Забыли пароль?</div>
    //         <div className="popup__text">Введите свою почту и мы отправим вам код для сброса пароля и восстановления аккаунта:</div>
    //         <form className="form">
    //           <label>
    //             <input className="label__input" type="email" placeholder="Ваш e-mail*"/>
    //           </label>
    //           <button type="submit" className="auth__form__btn">
    //             <a className="popup__link" href="">Войти</a> </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    //   <div id="popup__3" className="popup hidden">
    //     <div className="popup__body">
    //       <div className="popup__content">
    //         <a className="close popup__close" href="">X</a>
    //         <div className="popup__title">Забыли пароль?</div>
    //         <div className="popup__text">Код из сообщения:</div>
    //         <form className="form">
    //           <label>
    //             <input className="label__input" type="number" placeholder="Код*"/>
    //           </label>
    //           <label  className="password__label">
    //             <input className="label__input password__input " type="password" placeholder="Ваш пароль*"/>
    //             <div className="password__btn ">
    //               <img src="images/password-btn.svg" alt=""/>
    //             </div>
    //           </label>

    //           <button type="submit" className="auth__form__btn">
    //             <a className="popup__link" href="#popup__4"> УСТАНОВИТЬ ПАРОЛЬ</a>
    //            </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    //   <div id="popup__4" className="popup hidden">
    //     <div className="popup__body">
    //       <div className="popup__content">
    //         <a className="close popup__close close__All" href="#">X</a>
    //         <div className="popup__title">Вы успешно сменили пароль!</div>

    //       </div>
    //     </div>
    //   </div>
    //   <div id="popup__5" className="popup hidden">
    //     <div className="popup__body">
    //       <div className="popup__content">
    //         <a className="close popup__close" href="">X</a>
    //         <div className="popup__title">Регистрация</div>
    //         <form className="form">
    //           <label>
    //             <input className="label__input" type="email" placeholder="Ваш e-mail*"/>
    //           </label>
    //           <label  className="password__label">
    //             <input className="label__input password__input " type="password" placeholder="Ваш пароль*"/>
    //             <div className="password__btn ">
    //               <img src="images/password-btn.svg" alt=""/>
    //             </div>
    //           </label>
    //           <button type="submit" className="auth__form__btn"><a className="popup__link" href="#popup__6">Продолжить</a> </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    //   <div id="popup__6" className="popup hidden">
    //     <div className="popup__body">
    //       <div className="popup__content">
    //         <a className="close popup__close" href="#">X</a>
    //         <div className="popup__title">Регистрация - шаг 2</div>
    //         <div className="popup__text">Мы отправили вам на почту код для подтверждения регистации. Введите его, пожалуйста</div>
    //         <form className="form">
    //           <label>
    //             <input className="label__input" type="number" placeholder="Код с e-mail*"/>
    //           </label>
    //           <button type="submit" className="auth__form__btn">
    //             <a className="popup__link" href="#popup__7">ЗАРЕГИСТРИРОВАТЬСЯ</a> </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default Login;





