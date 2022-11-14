import React, {useState, useEffect} from "react"

function Facts (){

    const [breeds, setBreeds] = useState(null)
    const [searchInput, setSearchInput] = useState('');
    const [filteredBreedResults, setFilteredBreedResults] = useState([]);

    // const factsData = useEffect(() => {
    //     fetch('https://dog.ceo/api/breeds/list/all')
    //         .then(response => response.json())
    //         .then(data => {
    //             // console.log(data)
    //           setBreeds(data.message)
    //         });
    // }, []);


    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        breeds.filter((breed) => {
            return Object.values(breed).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredBreedResults(filteredBreeds)
    }

    const filteredBreeds = breeds.filter((breed) => {
        return Object.values(breed).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
    

    return (
        <div>
            <h1> This is the Filter Landing Page</h1>
            <input icon = 'search' placeholder = 'Search...'   onChange={(e) => searchItems(e.target.value)}/>
            
        </div>
    )
}

export default Facts;

// const configObj = {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(stateBody)
    //    }
       
    //    fetch('https://e94ac211-1edc-4dd6-8678-6a1d7bbe06c4.mock.pstmn.io/addDog',configObj)
    //     .then(response => response.json())
    //     .then(data => setStateBody(data))