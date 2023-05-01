import { ApolloError, DocumentNode, gql } from "@apollo/client";
import { client } from "../../components/context/QueryResultContext";
import pThrottle from "p-throttle";
import { Query } from "../../generated/graphql";


const GET_ANIME_DETAIL : DocumentNode = gql`
query getAnimeDetail ($id: Int!) {
    Media (id: $id, type: ANIME) {
        id
        coverImage{
            large
            }
        title {
            romaji
            english
        }
        genres
        description
        episodes
        duration
        status
        averageScore
        popularity
        format
        favourites
    }
}`;



const throttle = pThrottle({limit: 1, interval: 1000})
export const throttledFetchAnimeDetail = throttle(async ({ id } : { id: number }) => {
    
    const {data, loading, error} : { data : Query, loading : boolean, error? : ApolloError | undefined }= await client.query({
        query: GET_ANIME_DETAIL, 
        variables : { id : id }
      });

    return data.Media;
});