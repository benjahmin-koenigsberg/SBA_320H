import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const YourChoice = () => {

    const navigate = useNavigate()

    return (
        <div className='container'>
            <div class="card p-4" >
                {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                <div class="card-body">
                    <h3 class="card-title text-center fw-bold">Red Pill or Blue Pill</h3>
                    <div className='text-center'>
                    <iframe src="https://giphy.com/embed/1CNsm9ZkHF0m4" class="mb-2" ></iframe>
                    </div>
                    <h4 class="card-text text-cenetr" style={{lineHeight: '2rem'}}>
                        In the first episode of <em>The Matrix</em>, the lead character was given the option of taking a <span className='text-danger'>red</span> pill, enabling him to understand the truth outside of the illusion he lives in,<br></br><br></br> or a <span className='text-primary'>blue</span> pill, which would allow him to return to experiencing only the illusion.
                    </h4><br></br>
                    {/* <h4 class="card-title text-center">The Choice Is Yours</h4>
                    <h6 class="card-text text-cenetr">
                        As you progress through this app, you will have four opportunities, one for each animal...<br></br><br></br>
                    </h6>
                    <p class="card-text text-cenetr">
                        The Blue pill will show you random cute picturs<br></br><br></br>
                        The Red Pill will show a captive animal and give you insight about their suffering in captivity
                    </p> */}
                </div>
                <Button variant="dark" onClick={() => navigate('/problem')}>Next ➡️</Button>
            </div>
        </div>
    )
}

export default YourChoice
