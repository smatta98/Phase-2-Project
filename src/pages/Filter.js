import React, {useState, useEffect} from "react"


function Facts ({breeds}){

    const [searchDogs, setSearchDogs] = useState('');
    const [filteredBreedResults, setFilteredBreedResults] = useState([]);
      


    const searchItems = (searchValue) => {
        setSearchDogs(searchValue)
        if (searchDogs !== '') {
            const filteredDogs = breeds.filter((breed) => {
                return Object.values(breed).join('').toLowerCase().includes(searchDogs.toLowerCase())
        })
        setFilteredBreedResults(filteredDogs)
        }
        else {
            setFilteredBreedResults(breeds)
        }
    }

   
    // const configObj = {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(stateBody)
    //    }
       
    //    fetch('https://e94ac211-1edc-4dd6-8678-6a1d7bbe06c4.mock.pstmn.io/addDog',configObj)
    //     .then(response => response.json())
    //     .then(data => setStateBody(data))

    

    return (
        <div>
            <h1> This is the Filter Landing Page</h1>
            <input icon = 'search' placeholder = 'Search...'   onChange={(e) => searchItems(e.target.value)}/>
            <input icon = 'search' placeholder = "Don't see your dogs breed below? Add it here!"/> 
             {searchDogs.length > 1 ? (filteredBreedResults.map((breed) => {

                return (
                    <li>
                        {breed}
                    </li>
                )
            })
        ): (breeds.map((breed) => {

            return (
                <li>
                    {breed}
                </li>
            )
        }))
    }
            
        </div>
    )
}

export default Facts;

