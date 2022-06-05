import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShowInterface } from "./interface";

function Show() {
    const params = useParams();
    const [show, setShow] = useState<ShowInterface | null>(null);
    const [loading, setLoading] = useState(true);
    const [showError, setShowError] = useState<string>("");
    const getId = (searchId: string | undefined) => {
        fetch(`https://api.tvmaze.com/shows/${searchId}`)
            .then((response) => {
                if (response.ok) {return response.json();}
            })
            .then(function(data) {
                setShow(data);
                setLoading(false);
            })
            .catch((error) => {
                setShowError(error.message);
                setLoading(false);
            });
    }

    getId(params.id);

    return (
        <>
            {loading === false && show && (
                <div>
                    <h1>{show.name}</h1>
                    <p className= "summary" dangerouslySetInnerHTML={{__html: show.summary}}></p>
                    <Link to = {`/`} className="button">Return to search</Link>
                </div>
            )}
            {loading === false && !show && showError && (
                <div>
                    <p>{showError}</p>
                </div>
            )}
        </>
    );
}


export default Show;