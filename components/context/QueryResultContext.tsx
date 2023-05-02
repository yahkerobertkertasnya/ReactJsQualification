import { ApolloClient, ApolloError, InMemoryCache, NormalizedCacheObject, useQuery } from "@apollo/client";
import { createContext, useContext, useEffect, useState } from "react";
import { GET_ALL_ANIME } from "../../lib/queries/GetAnime.graphql";
import { Media, Query } from "../../generated/graphql";

export const client : ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: 'https://graphql.anilist.co',
    cache: new InMemoryCache()
});


export default function QueryProvider({children} : {children : JSX.Element}){
    const [result, setResult] = useState<any>(undefined);
    const {loading, error, data} : { loading : boolean, error? : ApolloError | undefined, data : any } = useQuery(GET_ALL_ANIME);


    
    useEffect(() => {
        if (data) {
            const allMedia : Media[] = [];

            for (const key in data) {
                allMedia.push(...data[key].media);
            }

            allMedia.sort((a , b) => {
                if( !a.averageScore || !b.averageScore ) return -1;
                else if (a.averageScore >= b.averageScore) {
                  return -1;
                } 
                else if (a.averageScore < b.averageScore) {
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