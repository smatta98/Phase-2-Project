import React, {useState, useEffect} from "react";


function Breeds (){

    // const [stateBody, setStateBody] = useState()
    const [breeds, setBreeds] = useState(null)
    const [breedList, setBreedList] = useState(null)


    const factsData = useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(data => {
                // console.log(data)
              setBreeds(data.message)
            });
    }, []);


    console.log(breeds)

   

   


       
return (
    <div>
        <h1>This is the Breeds Landing Page</h1>
        {/* <ul>
            {breedListing}
        </ul> */}
    </div>
)
}

export default Breeds;



    //    const breedKeys = Object.keys(breeds)

    //    console.log(breedKeys)
       

    // useEffect (() => {
    //     if (breeds){
    //         setBreedList(Object.keys(breeds))
    //     }
    //    }, [breeds])
    
    
    // const breedArray = breedKeys.map((breed) => {
    
    //     return (
    //         <div>
    //             <li>
    //                 {breed}
    //             </li>
    //         </div>
    //     )
    // })
    