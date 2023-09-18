import styles from './Gallery.module.scss';
import images from './images.json';

export default function Gallery() {
  
  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <picture key={index} className={styles.gallery__image}>
          <source media='(min-width: 768px)' srcSet={image.desktop} />
          <img src={image.mobile} alt=''/> 
        </picture>
      ))}
    </div>
  )
}