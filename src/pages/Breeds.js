import React, {useState, useEffect} from "react";


function Breeds (){

    // const [stateBody, setStateBody] = useState()
    const [breeds, setBreeds] = useState([])
    const [breedList, setBreedList] = useState(null)


     const factsData = useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(data => {
                setBreeds(data.message)
            });
    },[]);




       
return (
    <div>
        <h1>This is the Breeds Landing Page</h1>
        <ul>
            {Object.keys(breeds).map((breed) => {
                 return (
            <div>
                <li>
                    {breed}
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