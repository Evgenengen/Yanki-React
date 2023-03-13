import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import './style.css'

const Register = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const addAuth = () => {
    dispatch({type: 'ADD_AUTH', payload: {login, password}})
  }

  return (
    <div className="popup">
      <div className="popup__body">
        <div className="popup__content">
          <NavLink to='/' className="close popup__close">
            X
          </NavLink>
          <div className="popup__title">Регистрация</div>
          <form className="form">
            <label>
              <input
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="label__input"
                type="email"
                placeholder="Ваш e-mail*"
              />
            </label>
            <label className="password__label">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="label__input password__input "
                type="password"
                placeholder="Ваш пароль*"
              />
              <div className="password__btn ">
                <img src="images/password-btn.svg" alt="#" />
              </div>
            </label>
            <button type="submit" className="auth__form__btn">
              <NavLink to='/RegisterFinish' onClick={addAuth} className="popup__link">
                Продолжить
              </NavLink>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
