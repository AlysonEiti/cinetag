import styles from './Card.module.css'
import likeIcon from './like.png'
import dislikeIcon from './dislike.png'
import { useFavoriteContext } from 'context/Favorites'
import { Link } from 'react-router-dom'

export default function Card({id, title, cover}) {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const icon = (isFavorite) ? dislikeIcon : likeIcon;

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`} >
        <img src={cover} alt={title} className={styles.cover} />
        <h2>{title}</h2>
      </Link>
      <img src={icon} alt="Like movie" className={styles.like} 
        onClick={() => {
          addFavorite({id, title, cover})
        }}
      />      
    </div>
  )
}
