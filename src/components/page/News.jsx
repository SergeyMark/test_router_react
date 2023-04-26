import { Link } from "react-router-dom";

const newsArr = ['new-1', 'new-2', 'new-3', 'new-4', 'new-5', 'new-6', 'new-7'];


const News = () => {
    return(
        <div>
            <h1>News List</h1>
            {newsArr.map(news => {
            return <Link key={news} to={`/`}>{news}</Link>;
        })}
        </div>
    );
};

export default News;