import React from "react";
import SwitchToDarkIcon from "../pics/icon-moon.svg";
import SwitchToLightIcon from "../pics/icon-sun.svg";

const Header = ({ themeLight, setThemeLight }) => {
  const switchThemeIcon = themeLight ? SwitchToDarkIcon : SwitchToLightIcon;

  const changeTheme = () => {
    setThemeLight(!themeLight);
  };

  return (
    <header>
      <h1>TODO</h1>
      <button className="btn switch-theme-btn" onClick={changeTheme}>
        <img src={switchThemeIcon} alt="Dark Theme" />
      </button>
    </header>
  );
};

export default Header;
