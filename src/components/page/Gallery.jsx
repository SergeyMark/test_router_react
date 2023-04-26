import { useParams } from "react-router-dom";


const Gallery = () => {
    const paramsImg = useParams()

    return(
        <>
            {paramsImg.newId} <img src="" alt="Gallery" />
        </>
    )
}

export default Gallery;