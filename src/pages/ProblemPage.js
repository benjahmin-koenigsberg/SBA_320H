import bluePill from '../images/blue_pill.png'
import redPill from '../images/red_pill.png'


const ProblemPage = () => {
  return (
    <div>
          <h4 class="card-title text-center fw-bold">The Choice Is Yours</h4>
          <h5 class="card-text text-cenetr">
              As you progress through this app, you will have four opportunities...<br></br><br></br> one for each animal<br></br><br></br>
          </h5>
          <div className='text-center m-2'>
              <img src={bluePill} style={{ height: "3rem" }} alt='blue pill' />
          </div>
          <h5 class="card-text text-cenetr">
              The Blue pill will show you random cute picturs<br></br>
          </h5>
          <div className='text-center m-2'>
              <img src={redPill} style={{ height: "3rem" }} alt='red pill' />
          </div>
          <h5 className='card-text text-center'>
              The Red Pill will show a captive animal and give you insight about their suffering in captivity
          </h5>`
    </div>
  )
}

export default ProblemPage
