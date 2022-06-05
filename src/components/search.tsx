import { useState } from "react";
import { Link } from "react-router-dom"
import { ShowsInterface } from "./interface";

function Search() {
    const [series, setSeries] = useState([]);
    const [showError, setShowError] = useState<string>("");
    const getSearch = (searchText: string) => {
        fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
            .then((response) => {
                if (response.ok) {return response.json();}
            })
            .then(function(data) {
                setSeries(data);
            })
            .catch((error) => {
                setShowError(error.message);
            });
    }

    return (
        <div>
            <input type="search" placeholder='Search' onChange = {e => getSearch(e.target.value)}/>  
            <ul>{series.map((serie: ShowsInterface) => <li key={serie.show.id}><Link to={`/shows/${serie.show.id}`}>{serie.show.name}</Link></li>)}</ul>
            <p>{showError}</p>
        </div>
    );
}


export default Search;