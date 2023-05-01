import CardContent from "../Card/CardContent";
import { useContext, useEffect, useState } from "react";
import { QueryContext } from "../context/QueryResultContext";
import FavoriteCardContent from "../Card/FavoriteCardContent";
import { ApolloError } from "@apollo/client";
import { Media } from "../../generated/graphql";


function HomeContents(){
    const [media, setMedia] = useState<any>(null);

    const {loading, error, queryResult} : { loading? : boolean, error? : ApolloError | undefined, queryResult? : Media}= useContext(QueryContext);

    useEffect(() => {
        if(queryResult){
            setMedia(queryResult);
        }
    }, [queryResult])

    if(loading) return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <h1> Loading... </h1>
        </div>
    );
    if(error) return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <h1> Error: {error.message} </h1>;
        </div>
    );

    return (
        <div>
            <div className="d-flex flex-wrap">
                { media !== null ? 
                
                media.map((items : any, index : any) => {

                    let lsContent : (string | null) = localStorage.getItem("Favorites");

                    if(lsContent === null) return <div />
                    
                    let favoriteList : number[] = JSON.parse(lsContent);

                    if(items.title.english !== null && favoriteList.includes(items.id)) return <FavoriteCardContent media = {items} />
                }) : 
                
                <div className="position-absolute top-50 start-50 translate-middle">
                    <h1> Loading... </h1>
                </div>
                }
            </div>
            <div style={{ padding: "4vh"}}/>
        </div>
    );
}


export default HomeContents;