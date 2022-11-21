import React, { useState, useEffect } from "react"


function Facts({ breeds }) {

    const [searchDogs, setSearchDogs] = useState('');
    const [filteredBreedResults, setFilteredBreedResults] = useState([]);
    const [addDog, setAddDog] = useState({
        breed: "",
        subBreed: ""
    })

    function handleChange(event) {
        setAddDog({
            ...breeds,
            [event.target.id]: event.target.value,
        });
    }

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



    function handleSubmit(event){
    event.preventDefault();
    const postRequest = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(addDog)
    }

    fetch('https://e94ac211-1edc-4dd6-8678-6a1d7bbe06c4.mock.pstmn.io/addDog', postRequest)
        .then(response => response.json())
        .then(data => handleChange(data))

    }   
   

    return (
        <div className="Filter">
            <h1> Search for Your Favorite Breed!</h1>
            <h2>If you don't see your dog's breed below, add it to the api!</h2>
            <input icon='search' placeholder='Search...' onChange={(e) => searchItems(e.target.value)} />
            <form>
                <button className = 'submitButton' onSubmit={handleSubmit}>Submit</button>
                <input type="text" id="breed" placeholder="Breed" value={addDog.breed} onChange={handleChange} />
                <input type="text" id="subBreed" placeholder="Sub Breed" value={addDog.subBreed} onChange={handleChange} />
            </form>
            {searchDogs.length > 1 ? (filteredBreedResults.map((breed) => {

                return (
                    <li>
                        {breed.toUpperCase()}
                    </li>
                )
            })
            ) : (breeds.map((breed) => {

                return (
                    <li>
                        {breed.toUpperCase()}
                    </li>
                )
            }))
            }

        </div>
    )
}

export default Facts;




  // function handleSubmit(event) {
        //     event.preventDefault();
        //     fetch('https://e94ac211-1edc-4dd6-8678-6a1d7bbe06c4.mock.pstmn.io/addDog', {
        //       method: "POST",
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //       body:JSON.stringify(addDog),
        //     }, []);
        //   }