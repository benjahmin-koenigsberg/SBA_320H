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
                            <li><h5>Failure to Address Ethical Concerns</h5></li>
                            <li><h5>Lack of Understanding of Captive Environments</h5></li>
                            <li><h5>Disconnect from the Animal Breeding Industry Reality</h5></li>
                            <li><h5>Missed Opportunities for Advocacy</h5></li>
                        </ul>
                    </div>
                </div>
                <a href="#" class="btn btn-primary" onClick={() => navigate('/YourChoice')}>Next</a>
            </div>
        </div>
    )
}

export default Problem
