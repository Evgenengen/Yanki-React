import React from "react";
const AccordionLanguage = () => {
  return (
    <ul className="accordion__language__inner ">
      <li className="accordion__language">
        <select className="accordion__language__box white">
          <option value="1">RUS</option>
          <option value="2">UA</option>
          <option value="3">EN</option>
        </select>
      </li>
      <li className="accordion__language">
        <select className="accordion__language__box white">
          <option value="1">UAN</option>
          <option value="2">EUR</option>
        </select>
      </li>
    </ul>
  );
};

export default AccordionLanguage;
