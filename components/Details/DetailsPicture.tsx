import { Media } from "../../generated/graphql";
import DetailsFavoriteButton from "./DetailsFavoriteButton";



function DetailsPicture({ data } : { data : Media }){

    return (
        <div className="col position-relative ">
            <div className="d-flex">
                <div className="position-relative border">
                    <div className="position-absolute bottom-0 end-0 px-2">
                        <DetailsFavoriteButton id={data.id} />
                    </div>
                    <img src={data.coverImage?.large ?? ""} className="img-fluid align-items-center" alt="..." />
                </div>
            </div>
        </div>
    );
}

export default DetailsPicture;