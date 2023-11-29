import React from 'react'
import { useNavigate } from 'react-router-dom'

const Problem = () => {

    const navigate = useNavigate()

    return (
        <div className='container'>
            <div class="card p-4" >
                {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                <div class="card-body">
                    <h5 class="card-title text-center">The Problem</h5>
                    <p class="card-text text-cenetr">
                        When people think of cats, dogs, ducks and wolves, they likely imagine animals living free in the wild rather than these same animals breed into captivity for profit. This presents several problems:
                    </p><br />
                    <div class="card-text">
                        <ul>
                            <li><h5>Failure to Address Ethical Concerns</h5><p>Breeding animals for profit raises ethical questions, particularly when it involves practices like puppy mills or excessive breeding without regard for the animals' welfare.</p></li>
                            <li><h5>Lack of Understanding of Captive Environments</h5><p>When people associate animals solely with their wild counterparts, they might unknowingly support industries that profit from unethical breeding practices.</p></li>
                            <li><h5>Disconnect from the Animal Breeding Industry Reality</h5><p>Dogs and cats, as popular pets, are often bred for profit. Ignoring this reality can contribute to a disconnection from the larger industry and its impact on animal welfare.</p></li>
                            <li><h5>Missed Opportunities for Advocacy</h5><p>Breeding animals for profit raises ethical questions, particularly when it involves practices like puppy mills or excessive breeding without regard for the animals' welfare.</p></li>
                        </ul>
                    </div>
                </div>
                <a href="#" class="btn btn-primary" onClick={() => navigate('/YourChoice')}>Next</a>
            </div>
        </div>
    )
}

export default Problem
