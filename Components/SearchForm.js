import { useState } from "react";

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
            <input onChange={search} type="text"/>
            {/* Add Styling, possible MUI */}
            <ul>
                {hits.map(hit => (
                    <li key={hit.entityId}>
                        {hit.name} {hit.link}
                    </li>
                ))};
            </ul>
        </div>
    );
}