import { useRef } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";


const NewsDetails = () => {
    const location = useLocation();
    const backLocationRef = useRef(location.state?.from ?? '/news')
    const {newId} = useParams();

    console.log(location)

    return(
        <>
            <p>Simple News {newId}</p>
            <Link to={backLocationRef.current}>back to News</Link>
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