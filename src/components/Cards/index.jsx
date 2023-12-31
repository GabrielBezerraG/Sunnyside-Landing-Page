import styles from './Cards.module.scss';

export default function Cards() {
  return (
    <div className={styles.cards}>
      <div className={`${styles.cards__small_image} ${styles.egg}`} />

      <article className={styles.cards__article}>
        <h2>Transform your brand</h2>
        <p>We are a full-service creative agency specializing in helping brands grow fast.
          Engage your clients through compelling visuals that do most of the marketing for you.</p>
        <a href="#0" className={styles.yellow}>Learn More</a>
      </article>

      <div className={`${styles.cards__small_image} ${styles.glass}`} />

      <article className={`${styles.cards__article} ${styles["cards__article--right"]}`}>
        <h2>Stand out to the right audience</h2>
        <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
        <a href="#0" className={styles.pink}>Learn More</a>
      </article>

      <article className={`${styles.cards__large_card} ${styles.cherry}`}>
        <h3>Graphic Design</h3>
        <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
      </article>

      <article className={`${styles.cards__large_card} ${styles.tangerine}`}>
        <h3>Photography</h3>
        <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
      </article>
    </div>
  )
}