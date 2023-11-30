import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import bluePill from '../images/blue_pill.png'
import redPill from '../images/red_pill.png'


const Dominion = () => {

    const navigate = useNavigate()

    return (
        <div className='container'>
            <div class="card p-4" >
                {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                <div class="card-body text-center">
                    <h4 class="card-title text-center fw-bold">Dominion</h4>
                    <div className='text-center'>
                        <iframe src="https://player.vimeo.com/video/230171301?h=f2042bc20e"  allowfullscreen class="mb-2" ></iframe>
                    </div>
                    <h4 class="card-text text-cenetr mb-4" style={{ lineHeight: '2rem' }}>
                        Narrated by Joaquin Phoenix,
                        Dominion uses drones, hidden and handheld cameras to expose the dark underbelly of modern animal agriculture. Mainly focused on animals used for food, it also explores animal abuse in the clothing, entertainment and research industries.
                        <br></br>
                        <br></br>
                        Now available to <a href='https://www.dominionmovement.com/watch'>watch online for free.</a>
                    </h4>
                </div>
                <Button variant="dark" onClick={() => navigate('/')}>Start Over 🔄</Button>
            </div>
        </div>
    )
}


export default Dominion
