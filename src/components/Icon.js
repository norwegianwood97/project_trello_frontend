import React from 'react';
import { Link } from 'react-router-dom';
import './Icon.css';

import plus_icon from '../assets/plus_icon.png';
import mainpage_icon from '../assets/mainpage_icon.png';
import modify_icon from '../assets/modify_icon.png';
import user_icon from '../assets/user_icon.png';

function Icon({ type, name, showName = false, textPosition = 'bottom', onClick }) {
  let iconSrc;

  switch (type) {
    case 'Plus':
      iconSrc = plus_icon;
      break;
    case 'MainPage':
      iconSrc = mainpage_icon;
      break;
    case 'Modify':
      iconSrc = modify_icon;
      break;
    case 'User':
      iconSrc = user_icon;
      break;
    default:
      iconSrc = '';
  }

  const iconElement = (
    <div className="icon" onClick={onClick}>
      <img src={iconSrc} alt={type} />
    </div>
  );

  const isLinkIcon = ['MainPage'].includes(type);
  if (isLinkIcon) {
    return <Link to={`/`}>{iconElement}</Link>;
  }

  return iconElement;
}

export default Icon;
