import { Link } from "react-router-dom";

const newsArr = ['new-1', 'new-2', 'new-3', 'new-4', 'new-5', 'new-6', 'new-7'];


const News = () => {

    // useEffect( ()=> {
    //     // http 
    // }, [])

    return (
        <>
            <h1>News</h1>
            {newsArr.map((new) => { 
                return <Link key={new}>{new}</Link>;
            })}
        </>
    )
}

export default News;