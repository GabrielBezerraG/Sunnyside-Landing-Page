import styles from './Testimonials.module.scss';
import testimonialsList from './testimonials.json';

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      
      <h2 className={styles.testimonials__title}>
        Client Testimonials
      </h2>

      <div className={styles.testimonials__list}>
        {testimonialsList.map((testimonial, index) => (
          <article key={index} className={styles.testimonials__item}>
            <img src={testimonial.image} alt={`Picture of ${testimonial.name}`} />
            <p>{testimonial.text}</p>
            <h4>{testimonial.name}</h4>
            <span>{testimonial.occupation}</span>
          </article>
        ))}
      </div>
    </section>
  )
}