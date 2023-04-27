import { Loading } from "components/Loading/Loading";
import { Suspense, useRef } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";


const NewsDetails = () => {
    const location = useLocation();
    const backLocationRef = useRef(location.state?.from ?? '/news')
    const {newId} = useParams();

    return(
        <>
            <p>Simple News {newId}</p>
            <Link to={backLocationRef.current}>back to News</Link>
            <ul>
                <li>
                    <Link to="gallery">Gallery</Link>
                </li>
            </ul>
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
        </>
    )
}

export default NewsDetails;