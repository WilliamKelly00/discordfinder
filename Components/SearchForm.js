import { useState } from "react";
import { TextField } from "@mui/material";

export default function SearchForm(){

    const [hits, setHits] = useState([]);

    const search = async (event) => {
        const q = event.target.value;
        //add debouncing
        if(q.length > 2){
            const params = new URLSearchParams({ q });
            
            const res = await fetch('api/search?' + params);
            const result = await res.json();
            console.log(result);
            setHits(result['servers']);

        }

    };


    return (
        <div>
            <TextField id="SearchBar" label="Explore" variant="outlined" onChange={search} type="text"/>
            
            <div className="server-container">
                {hits.map(hit => (
                    <div classname="server-card" key={hit.entityId}>
                        <img src={hit.image} alt={hit.name} />
                        <h3>{hit.name}</h3>
                        <p>{hit.description}</p>
                    </div>
                ))};
            </div>
        </div>
    );
}