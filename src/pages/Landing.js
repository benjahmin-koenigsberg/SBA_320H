import React from 'react'
import { useNavigate } from 'react-router-dom'


const Landing = () => {

    const navigate = useNavigate()

    return (
        <div className='container'>
            <div class="card p-4" >
                {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                <div class="card-body">
                    <h5 class="card-title text-center">Origin</h5>
                    <p class="card-text text-cenetr">
                        This is a class project for the <a href='https://perscholas.org'>Per Scholas</a> React.js developer bootcamp to pratice and demonstrate use of HTML, CSS, JavaScript, REACT and APIs requests
                    </p>
                    <h5 class="card-title text-center">APIs Used</h5>
                    <p class="card-text">
                        <ul>
                            <li>Random Fox Images <a href='https://randomfox.ca/'>https://randomfox.ca/</a></li>
                            <li>Random Cat Images<a href='https://thecatapi.com/'>'https://thecatapi.com/</a></li>
                            <li>Random Duck Images<a href='https://random-d.uk/api'>https://random-d.uk/api</a></li>
                            <li>Random Dog Images <a href='https://dog.ceo/'>https://dog.ceo/</a> </li>

                        </ul>
                    </p>
                    <h5 class="card-title text-center">Purpose</h5>
                    <p class="card-text text-cenetr">
                        I created a app to prompt users with a choice: either view a random image of a cat, dog, duck, or fox in the wild from a public API or learn about the plight of these animals in captivity.
                        <br></br><br></br>
                        This app aims to encourage users to consider the contrast between the natural lives of these animals and the challenges they face in captivity, fostering awareness and empathy.
                        </p>

                </div>
                <a href="#" class="btn btn-primary" onClick={()=>navigate('/problem')}>Next</a>
            </div>
        </div>
    )
}

export default Landing
