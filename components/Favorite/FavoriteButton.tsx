import { useEffect, useState } from "react";



function FavoriteButton({id} : {id : number}){

   
    const [isFavorite, setFavorite] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage){
            let lsContent : (string | null);
            lsContent = localStorage.getItem("Favorites");

            if(lsContent === null){
                return false;
            }
            else{
                let favoriteList : number[] = JSON.parse(lsContent);
                return favoriteList.includes(id);
            }
        }
    });
    
    useEffect(() => {
        let lsContent : (string | null) = localStorage.getItem("Favorites");
        let favoriteList : number[] = [];
        
        if(isFavorite){

            if(lsContent === null){
                favoriteList = [id];
            }
            else{
                favoriteList = JSON.parse(lsContent);
                if(!favoriteList.includes(id)) favoriteList.push(id);
            }
        }
        else{
            if(lsContent !== null){
                favoriteList = JSON.parse(lsContent);
                if(favoriteList.includes(id)){
                    favoriteList = favoriteList.filter((item) => item !== id);
                }
            }
        }
        console.log(localStorage.getItem("Favorites"));
        localStorage.setItem("Favorites", JSON.stringify(favoriteList));
    },[isFavorite]);


    return(
        <button className="btn p-0 shadow-none btn-link" style={{ marginBottom: "1em"}} onClick={() => { setFavorite(!isFavorite) }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="4vw" height="10%" fill={ isFavorite ? "red" : "white" } className="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
        </button>
    );

}

export default FavoriteButton;