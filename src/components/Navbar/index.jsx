import styles from './Navbar.module.scss';

export default function Navbar({ navbarVisibility }) {
  return (
    <nav className={`${styles.navbar} ${navbarVisibility ? '' : styles.navbar__disabled}`}>
      <span className={styles.navbar__tip} />
      <div className={styles.navbar__container}>
        <ul>
          <li>
            <a href="#0">About</a>
          </li>
          <li>
            <a href="#0">Services</a>
          </li>
          <li>
            <a href="#0">Projects</a>
          </li>
        </ul>
        <button className={styles.navbar__contact}>
          Contact
        </button>
      </div>
    </nav>
  )
}