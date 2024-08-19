import React from 'react'
import { IoMdSunny, IoMdMoon } from "react-icons/io";

function Header({ theme, toggleTheme }) {
  return (
    <header className='app-header'>
      <div>
        <h2>TODO APP</h2>
        <button aria-label="Switch Theme" className="btn-switch" onClick={() => toggleTheme()}>
          {theme === 'light' ? <IoMdMoon /> : <IoMdSunny />}
        </button>
      </div>
    </header>
  );
}

export default Header;