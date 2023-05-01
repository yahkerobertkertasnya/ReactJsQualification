import Link from 'next/link';
import styles from '../../styles/card.module.css';
import FavoriteButton from '../Favorite/FavoriteButton';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Media } from '../../generated/graphql';


function CardContent({media} : { media : Media }){
  let theme = useContext(ThemeContext);

    return (
      <div className={`card col-md-4 m-0 rounded-0 border-0 bg-transparent ${styles.card} mt-0` }>
        <div className={`position-absolute bottom-0 end-0 ${styles.cardFavoriteButton}`}>
            <FavoriteButton id={media.id} />
          </div>
        <Link href={"details/" + media.id} className={`d-flex ${styles.cardImageDiv}`}>
          <img src={media.coverImage?.large ?? ""} alt="" className={`d-flex flex-fill ${styles.cardImage}`} />
        </Link>
        <div className={`${styles.cardBody}`}>
          <div className={`text-wrap text-break lh-sm  ${styles.cardBodyContent} ${theme.text}`}>
            {media.title?.english}
          </div>
        </div>
        <div className={`card-footer border-0 mt-1 p-2 ${theme.background}`}/>
      </div>
    );


}


export default CardContent;

