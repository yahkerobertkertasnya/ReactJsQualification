import { ApolloError, DocumentNode, gql } from "@apollo/client";
import { client } from "../../components/context/QueryResultContext";
import { Query } from "../../generated/graphql";


const GET_ALL_ID : DocumentNode = gql`
query getAllId {
  
  Page1: Page(page:1, perPage:50){
    media(type:ANIME, sort:SCORE_DESC){
      id
    }
  }
  Page2: Page(page:2, perPage:50){
  media(type:ANIME, sort:SCORE_DESC){
    id
  }
}
Page3: Page(page:3, perPage:50){
  media(type:ANIME, sort:SCORE_DESC){
    id
  }
}
Page4: Page(page:4, perPage:50){
   media(type:ANIME, sort:SCORE_DESC){
     id
   }
 }
Page5: Page(page:5, perPage:50){
  media(type:ANIME, sort:SCORE_DESC){
    id
  }
}
}`;

export async function getAllId() : Promise<number[]> {
  const {data, loading, error} : { data : any, loading : boolean, error? : ApolloError | undefined } = await client.query({
    query: GET_ALL_ID
  });

  const mergedId : number[] = [];

  for (const key in data) {
      if (data[key].media !== undefined) {
        const mediaId = data[key].media.map((media: { id: number; }) => media.id);
        mergedId.push(...mediaId);
      }
  }

  return mergedId;

}
