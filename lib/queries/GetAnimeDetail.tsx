import { DocumentNode, gql } from "@apollo/client";
import { client } from "../../components/context/QueryResultContext";


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
    
    console.log("APAAA", data.Media)
    return data.Media;
}
