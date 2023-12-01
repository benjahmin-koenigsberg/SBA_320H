import React from 'react'

const DoninionPage = () => {
  return (
    <div>
          <h4 class="card-title text-center fw-bold">Dominion</h4>
          <div className='text-center'>
              <iframe src="https://player.vimeo.com/video/230171301?h=f2042bc20e" allowfullscreen class="mb-2" />
          </div>
          <h4 class="card-text text-cenetr mb-4" style={{ lineHeight: '2rem' }}>
              Narrated by Joaquin Phoenix,
              Dominion uses drones, hidden and handheld cameras to expose the dark underbelly of modern animal agriculture. Mainly focused on animals used for food, it also explores animal abuse in the clothing, entertainment and research industries.
              <br></br>
              <br></br>
              Now available to <a href='https://www.dominionmovement.com/watch'>watch online for free.</a>
          </h4>
    </div>
  )
}

export default DoninionPage
