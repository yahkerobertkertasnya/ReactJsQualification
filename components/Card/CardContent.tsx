import Link from 'next/link';
import styles from '../../styles/card.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Media } from '../../generated/graphql';


function CardContent({media} : { media : Media }){
    let theme = useContext(ThemeContext);

    return (
      <Link href={"details/" + media.id} className={`card col-md-4 m-0 rounded-0 border-0 bg-transparent ${styles.card}`}>
        <div className={`d-flex ${styles.cardImageDiv}`}>
          <img src={media.coverImage?.large ?? ""} alt="" className={`d-flex flex-fill ${styles.cardImage}`}/>
        </div>
        <div className={`${styles.cardBody}`}>
          <div className={`text-wrap text-break lh-sm  ${styles.cardBodyContent} ${theme.text}`}>
            {media.title?.english}
          </div>
        </div>
        <div className={`card-footer border-0 ${styles.cardFooter} ${theme.background}`}/>
      </Link>
    );


}


export default CardContent;

