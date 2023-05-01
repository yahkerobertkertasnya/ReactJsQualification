import { getAllId } from "../../lib/queries/GetID.graphql";
import { throttledFetchAnimeDetail } from "../../lib/queries/GetAnimeDetail.graphql";
import DetailsContents from "../../components/Details/DetailsContents";
import { Media } from "../../generated/graphql";


function detailPage({ postData } : { postData : Media }){
    return (
        <div>
            <DetailsContents data={postData}/>
        </div>
    );
}

export async function getStaticPaths() {
    const ids = await getAllId();

    const paths = ids.map((id) => {
        return {
            params: {
                id: id.toString(),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
}
  
export async function getStaticProps({ params } : { params : { id : string }}) {
    const postData = await throttledFetchAnimeDetail({ id : Number(params.id)});

    return {
        props: {
            postData,
    },
};
}





export default detailPage;