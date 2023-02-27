import { NavLink } from "react-router-dom";
import './style.css'

const RegisterFinish = () => {
    return (  
    <div className="popup">
    <div className="popup__body">
      <div className="popup__content">
        <NavLink to='/Login' className="close popup__close close__All" >X</NavLink>
        <div className="popup__title">Регистрация - успешно!</div>
        <div className="popup__text">Вы успешно зарегестрировались! Приятных покупок!</div>
      </div>
    </div>
   </div> 
   );
}
 
export default RegisterFinish;