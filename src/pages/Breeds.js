import React, {useEffect, useState} from "react";


function Breeds ({breeds}){

    const [addNewDog, setAddNewDog] = useState('')
    const [newBreedList, setNewBreedList] = useState(breeds)



    function handleAddNewDog (e){
        setAddNewDog(e.target.value)
    }

    function handleNewBreedList(){
        setNewBreedList([...newBreedList,addNewDog, breeds]);
        setAddNewDog('')
    }

    console.log(newBreedList)
   
       
return (
    <div className="Breeds">
        <h1>Master List of Breeds</h1>
        <input type = "text" value = {addNewDog} onChange = {handleAddNewDog} />
        <button type = "button" onClick = {handleNewBreedList}>Add a Dog!</button>
        <ul>
            {breeds.map((breed) => {
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