import DetailsPicture from "./DetailsPicture";


function DetailsContents({data} : any){

    return (
        <>
            <div className="container text-center">
                <div className="row p-2">
                    <DetailsPicture data={data}/>
                    <div className="col text-end mt-2">
                        <div>
                            <h4 className="m-0">
                                Score
                            </h4>
                            <div className="align-middle fs-2 fw-bold">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill mb-2 me-1" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                {data.averageScore}
                            </div>
                            <h6 className="m-0">
                                Popularity
                            </h6>
                            <div className="align-middle fs-6 fw-bold">
                                {data.popularity}
                            </div>
                            <h6 className="m-0">
                                Favorites
                            </h6>
                            <div className="align-middle fs-6 fw-bold">
                                {data.favourites}
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="my-0">{data.title.english}</h2>
                <div>{data.title.romaji}</div>
                <div>
                    <div>
                        {data.format} - {data.status} - {data.episodes} ep, {data.duration} min
                        </div>
                </div>
                <div> 
                    {data.genres.map((item : string) => {
                        return item + " ";
                    })}
                </div>
            </div>
            <div className="py-4 px-3" dangerouslySetInnerHTML={{ __html: data.description}} />
            <div className="py-3"></div>
        </>
        
    );



}

export default DetailsContents;