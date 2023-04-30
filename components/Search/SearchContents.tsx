import { useQuery } from "@apollo/client";
import { GET_ALL_ANIME } from "../../lib/queries/GetAnime";
import CardContent from "../Card/CardContent";
import { useContext, useEffect, useState } from "react";
import Searchbar from "./SearchBar";
import { QueryContext } from "../context/QueryResultContext";

function SearchContents(){
    const [media, setMedia] = useState<any>(null);
    const [rawData, setRawData] = useState<any>(null);

    const {loading, error, queryResult} = useContext(QueryContext);

    useEffect(() => {
        if(queryResult){
            setMedia(queryResult);
            setRawData(queryResult);
        }
        
    }, [queryResult]);

    const onSearchChange = (search : string) => {
        if (rawData) {
            setMedia(rawData.filter((item: any) =>
              (item.title.english) ? item.title.english.toString().toLowerCase().includes(search.toLowerCase()) : false
            ));
        }
    }
    
      
    if(loading) return (
        <div>
            <Searchbar searchFunction={onSearchChange}/>
            <div className="position-absolute top-50 start-50 translate-middle">
                <h1> Loading... </h1>
            </div>
        </div>
    );
    else if(error) return (
        <div>
            <Searchbar searchFunction={onSearchChange}/>
            <div className="position-absolute top-50 start-50 translate-middle">
                <h1> Error: {error.message} </h1>;
            </div>
        </div>
    );


    return (
    <div>
        <Searchbar searchFunction={onSearchChange}/>
        
        <div className="d-flex flex-wrap p-0 m-0">
            { media !== null ? 
                media.map((items : any, index : any) => {
                    if(items.title.english !== null)
                    return <CardContent media = {items} />
                }) : 
                <div className="position-absolute top-50 start-50 translate-middle">
                    <h1> Loading... </h1>
                </div>
            }
        </div>
        <div style={{ padding: "3vh"}}/>
    </div>
    );
    
}


export default SearchContents;