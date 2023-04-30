import { getAllId } from "../../lib/queries/GetID";
import { getAnimeDetail, throttledFetchAnimeDetail } from "../../lib/queries/GetAnimeDetail";
import DetailsContents from "../../components/Details/DetailsContents";


function detailPage({postData} : any){
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

    console.log("NMYAAA" , paths);
    return {
        paths,
        fallback: false,
    };
}
  
export async function getStaticProps({ params } : { params : { id : string }}) {
    const postData = await throttledFetchAnimeDetail({ id : Number(params.id)});
    // console.log(postData.averageScore);
    return {
        props: {
            postData,
    },
};
}





export default detailPage;