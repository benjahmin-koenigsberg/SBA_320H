import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import bluePill from '../images/blue_pill.png'
import redPill from '../images/red_pill.png'


const CallToAction = () => {

    const navigate = useNavigate()

    return (
        <div className='container'>
            <div class="card p-4" >
                {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                <div class="card-body text-center">
                    <h4 class="card-title text-center fw-bold">The Choice Is Yours</h4>
                    <div className='text-center'>
                        <iframe src="https://giphy.com/embed/EwSuEVPHR47YNPf6py" class="mb-2" ></iframe>
                    </div>
                    <h4 class="card-text text-cenetr" style={{ lineHeight: '2rem' }}>
                        Willful ignorance and inaction can be appealing choices for several reasons, though it's important to note that these choices often have negative consequences:
                    </h4>
                    <ul className='text-start'>
                        <li>Supporting Unethical Actions</li>
                        <li>Underestimation of the Human Impact</li>
                        <li>Missed Opportunities for Advocacy</li>
                    </ul>
                    <h4 class="card-text text-cenetr" style={{ lineHeight: '2rem' }}>
                        Becoming aware of injustices that one was previously ignorant or avoidant of can lead to several significant benefits:                    </h4>
                    <ul className='text-start'>
                        <li>Social Change and Activism</li>
                        <li>Reduced Ignorance and Prejudice</li>
                        <li>Promotion of Accountability</li>
                    </ul>

                </div>
                <Button variant="dark" onClick={() => navigate('/dominion')}>Next ➡️</Button>
            </div>
        </div>
    )
}


export default CallToAction
