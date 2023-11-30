import React from 'react'
import { useNavigate } from 'react-router-dom'

const YourChoice = () => {

    const navigate = useNavigate()

  return (
      <div className='container'>
          <div class="card p-4" >
              {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
              <div class="card-body">
                  <h4 class="card-title text-center">Red Pill or Blue Pill</h4>
                  <h6 class="card-text text-cenetr">
                      In the first episode of the film trilogy The Matrix, lead character Neo was given the option of taking a red pill, which would enable him to understand what was actually occurring outside the illusion created by the Matrix, or a blue pill, which would allow him to return to experiencing only that illusion.
                  </h6><br></br>
                  <h4 class="card-title text-center">Instructions</h4>
                  <p class="card-text text-cenetr">
                      The Blue pill will show you a random cute pic and give you some info about this animal in the wild<br></br><br></br>
                      The Red Pill will show a picture of a captive animal and give you some info about their plight in captivity
                  </p>
                  <h4 class="card-title text-center">The Choice Is Yours</h4>
                  <h6 class="card-text text-cenetr">
                      As you progress through this app, you will have four opportunities, one for each animal...<br></br><br></br>

                      Addressing injustice often requires courage, empathy, and a commitment to positive change. Encouraging open dialogue, education, and empathy can help break down the barriers that lead to these choices.
                  </h6>

              </div>
              <a href="#" class="btn btn-primary" onClick={() => navigate('/cats')}>Get Started</a>
          </div>
      </div>
  )
}

export default YourChoice
