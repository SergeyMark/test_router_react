import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useState } from "react";


const News = () => {
    const [news] = useState(['new-1', 'new-2', 'new-3', 'new-4', 'new-5', 'new-6', 'new-7']);
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation();

    const newId = searchParams.get('newId') ?? '';

    const updateQueryString = event => {
        if (event.target.value === '') {
            return setSearchParams({})
        } else {
            setSearchParams({newId: event.target.value})
        }   
    }

    const visibleNews = news.filter(newsOne => newsOne.includes(newId))

    console.log(location)

    return(
        <div>
            <h1>News List</h1>
            <input 
                type="text" 
                value={newId}
                onChange={updateQueryString}
            />
            <ul>
                {visibleNews.map(data => {
                    return <li key={data}>
                                <Link to={`${data}`} state={{from: location}}>{data}</Link>
                           </li>;
                })}
            </ul>
        </div>
    );
};

export default News;