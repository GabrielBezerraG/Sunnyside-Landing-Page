import styles from './Footer.module.scss';
import icons from './icons.json';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <i className={styles.footer__logo} />

      <ul className={styles.footer__links}>
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

      <ul className={styles.footer__icons}>
        {icons.map((icon, index) => (
          <li key={index}>
            <a href="#0" title={icon.name} className={styles.footer__icon}>
              <img src={icon.src} alt={icon.name} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}