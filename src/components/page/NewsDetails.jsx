import { Link, Outlet, useParams } from "react-router-dom";

const NewsDetails = () => {
    const {newId} = useParams();



    return(
        <>
            <p>Simple News {newId}</p>
            <ul>
                <li>
                    <Link to="gallery">Gallery</Link>
                </li>
            </ul>
            <Outlet />
        </>
    )
}

export default NewsDetails;