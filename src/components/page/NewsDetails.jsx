import { useParams } from "react-router-dom";

const NewsDetails = () => {
    const {newId} = useParams();

    

    return(
        <>
            <p>Simple News {newId}</p>
        </>
    )
}

export default NewsDetails;