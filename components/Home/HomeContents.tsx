import CardContent from "../Card/CardContent";
import { useContext, useEffect, useState } from "react";
import { QueryContext } from "../context/QueryResultContext";


function HomeContents(){
    const [media, setMedia] = useState<any>(null);

    const {loading, error, queryResult} = useContext(QueryContext);

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
                <div  className="d-flex flex-wrap">
                { media !== null ? 
                media.map((items : any, index : any) => {
                    if(items.title.english !== null)
                    return <CardContent media = {items} />
                }) : 
                <div className="position-absolute top-50 start-50 translate-middle">
                    <h1> Loading... </h1>
                </div>
                }
                </div><div style={{ padding: "4vh"}}/>
            </div>
        </div>
    );
}


export default HomeContents;