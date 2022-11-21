import React from "react";


function Breeds ({breeds}){




       
return (
    <div className="Breeds">
        <h1>Master List of Breeds</h1>
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