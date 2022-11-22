import { render } from "@testing-library/react";
import React, {useEffect, useState} from "react";


function Breeds ({breeds}){

    const [addNewDog, setAddNewDog] = useState('')
    // const [newBreedList, setNewBreedList] = useState([])
    const copyBreeds = breeds


    console.log({breeds})
    
 

    function handleAddNewDog (e){
        setAddNewDog(e.target.value)
    }

    function handleNewBreedList(){
        const copyBreeds = breeds.push(addNewDog)
        setAddNewDog('')
    }
   
    
return (
    <div className="Breeds">
        <h1>Master List of Breeds</h1>
        <input type = "text" value = {addNewDog} onChange = {handleAddNewDog} />
        <button type = "button" onClick = {handleNewBreedList}>Add a Dog!</button>
        <ul>
            {copyBreeds.map((breed) => {
                 return (
            <div>
                <li>
                    {breed.toLocaleUpperCase()}
                </li>
            </div>
           )
            })}
        </ul>
    </div>
)
}

export default Breeds;



    // 

    //    console.log(breedKeys)
       

    
    
    
    // const breedArray = breedKeys.map((breed) => {
    
    //     return (
    //         <div>
    //             <li>
    //                 {breed}
    //             </li>
    //         </div>
    //     )
    // })
    

    // useEffect (() => {
    //     if (breeds){
    //         setBreedList(Object.keys(breeds))
    //     }
    //    }, [breeds])

    //    console.log(breedList)