import React, {useState, useEffect} from "react";


function Breeds ({breeds}){

    const [newDog, setNewDog] = useState({breed: ''})
    const [newBreeds, setNewBreeds] = useState({breeds})
    
    function handleNewDog(event){
        setNewDog({[event.target.id]: event.target.value})
    }

    function handleSubmit (e){
        e.preventDefault();
        const newBreeds = breeds.append({newDog})
        
        setNewBreeds(newBreeds)
    }


       
return (
    <div className="Breeds">
        <h1>Master List of Breeds</h1>
        <h2>Don't see your dog's breed? Add it in!</h2>
        <form> 
            <button onSubmit={handleSubmit}>Add a Dog</button>
            <input type = 'submit' id = 'newDog' placeholder="Add a dog!" value = {newDog} onChange = {handleNewDog}> </input>
        </form>
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