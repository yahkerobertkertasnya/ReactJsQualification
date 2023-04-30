import { ApolloClient, InMemoryCache, NormalizedCacheObject, useQuery } from "@apollo/client";
import { createContext, useContext, useEffect, useState } from "react";
import { GET_ALL_ANIME } from "../../lib/queries/GetAnime";

export const client : ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: 'https://graphql.anilist.co',
    cache: new InMemoryCache()
});

interface QueryResult {
    error? : any;
    loading? : any;
    queryResult? : any;
}


export default function QueryProvider({children} : {children : JSX.Element}){
    const [result, setResult] = useState<any>(undefined);
    const {loading, error, data} = useQuery(GET_ALL_ANIME);


    
    useEffect(() => {
        if (data) {
            const allMedia = [];

            for (const key in data) {
                allMedia.push(...data[key].media);
            }

            allMedia.sort((a , b) => {
                if(a.title.english === null || b.title.english === null ) return -1;
                if (a.title.english.toLowerCase() < b.title.english.toLowerCase()) {
                  return -1;
                } 
                else if (a.title.english.toLowerCase() > b.title.english.toLowerCase()) {
                  return 1;
                } 
                else {
                  return 0;
                }
            });
            setResult(allMedia);
        }
    }, [data]);

    return (
        <QueryContext.Provider value={{ error : error, loading : loading, queryResult : result }}>
            {children}
        </QueryContext.Provider>
    );
}



export const QueryContext = createContext<{
    loading? : any;
    error? : any;
    queryResult? : any;
}>({loading : null, error : null, queryResult : null});