import styles from './Header.module.scss';
import logo from '../../assets/images/logo.svg';
import { ReactComponent as HamburgerIcon } from '../../assets/images/icon-hamburger.svg';
import { ReactComponent as ArrowDown } from '../../assets/images/icon-arrow-down.svg';
import Navbar from '../Navbar';
import { useState } from 'react';

export default function Header() {

  const [navbarVisibility, setNavbarVisibility] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.header__bar}>
        <img src={logo} alt='Sunnyside logo' className={styles.header__logo} />
        <button 
          className={styles.header__button}
          onClick={() => setNavbarVisibility(prev => !prev)}
        >
          <HamburgerIcon />
        </button>
        <Navbar navbarVisibility={navbarVisibility} />
      </div>
      <h1>We Are Creatives</h1>
      <div className={styles.header__arrowdown}>
        <ArrowDown />
      </div>
    </header>
  )
}