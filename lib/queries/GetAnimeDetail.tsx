import { DocumentNode, gql } from "@apollo/client";
import { client } from "../../components/context/QueryResultContext";
import pThrottle from "p-throttle";


const GET_ANIME_DETAIL : DocumentNode = gql`
query ($id: Int!) {
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
        season
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

export async function getAnimeDetail({ id } : { id: number }) : Promise<any> {
    const {data, loading, error} : any = await client.query<any>({
      query: GET_ANIME_DETAIL, 
      variables : { id : id }
    });
    
    return data.Media;
}



const throttle = pThrottle({limit: 5, interval: 1000})
export const throttledFetchAnimeDetail = throttle(async ({ id } : { id: number }) => {

    const {data, loading, error} = await client.query<any>({
        query: GET_ANIME_DETAIL, 
        variables : { id : id }
      });
    //   console.log(data);
    return data.Media;
});