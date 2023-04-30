import { DocumentNode, gql } from "@apollo/client";


export const GET_ALL_ANIME : DocumentNode = gql`
query getAllAnime {
  
  Page1: Page(page:1, perPage:50){
    media(type:ANIME, sort:SCORE_DESC){
      id
      coverImage{
          large
      }
      title{
        english
      }
    }
  }
  Page2: Page(page:2, perPage:50){
    media(type:ANIME, sort:SCORE_DESC){
      id
      coverImage{
          large
      }
      title{
        english
      }
    }
  }
  Page3: Page(page:3, perPage:50){
  media(type:ANIME, sort:SCORE_DESC){
    id
    coverImage{
        large
    }
    title{
      english
    }
  }
}
Page4: Page(page:4, perPage:50){
   media(type:ANIME, sort:SCORE_DESC){
     id
     coverImage{
         large
     }
     title{
       english
     }
   }
 }
Page5: Page(page:5, perPage:50){
  media(type:ANIME, sort:SCORE_DESC){
    id
    coverImage{
        large
    }
    title{
      english
    }
  }
}
}`;



