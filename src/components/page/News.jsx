import { Link } from "react-router-dom";

const newsArr = ['new-1', 'new-2', 'new-3', 'new-4', 'new-5', 'new-6', 'new-7'];


const News = () => {
    return(
        <div>
            <h1>News List</h1>
            <ul>
                {newsArr.map(news => {
                    return <li key={news}><Link to={`${news}`}>{news}</Link></li>;
                })}
            </ul>
        </div>
    );
};

export default News;