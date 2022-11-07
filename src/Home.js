import React, {useState, useEffect} from "react";


function Home (){

const [dogImage, setDogImage] = useState(null)


const dogData = useEffect(() => {
      fetch('https://dog.ceo/api/breeds/image/random')
          .then(response => response.json())
          .then(data => setDogImage(data.message));
  }, []);

    return (
        <div>
            <h1>Welcome to the Shiv's Phase 2 Project!</h1>
                <h2>Please enjoy these random images of cute pups</h2>
                <img src = {dogImage} alt = 'Random Dog Image'></img>
        </div>
    )
}

export default Home;