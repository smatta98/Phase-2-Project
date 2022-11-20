import React, {useState, useEffect} from "react"


function Facts ({breeds}){

    const [searchDogs, setSearchDogs] = useState('');
    const [filteredBreedResults, setFilteredBreedResults] = useState([]);
    const [addDog, setAddDog] = useState({
        breed: "",
        subBreed: ""
     })
      
     function handleChange(event) {
        setAddDog({
          ...addDog,
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

    // const postRequest = {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(addDog)
    //    }
       

    // //    https://e94ac211-1edc-4dd6-8678-6a1d7bbe06c4.mock.pstmn.io/addDog
       
    //    fetch('http://localhost:3000/filter',postRequest)
    //     .then(response => response.json())
    //     .then(data => handleChange(data))

    
        // function handleSubmit(event){
        //     event.preventDefault();
        //     // postRequest()
        // }

        function handleSubmit(event) {
            event.preventDefault();
            fetch('https://e94ac211-1edc-4dd6-8678-6a1d7bbe06c4.mock.pstmn.io/addDog', {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(addDog),
            }, []);
          }

    return (
        <div>
            <h1> This is the Filter Landing Page</h1>
            <input icon = 'search' placeholder = 'Search...'   onChange={(e) => searchItems(e.target.value)}/>
            <form> 
            <button onSubmit = {handleSubmit}>Submit</button>
            <input type = "text" id = "breed" placeholder = "Breed" value = {addDog.breed} onChange = {handleChange}/> 
            <input type="text" id="subBreed" placeholder = "Sub Breed" value = {addDog.subBreed} onChange = {handleChange} />
            </form>
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

