const LandingPage = () => {

    return (
        <>     <h4 class="card-title text-center fw-bold">Origin</h4>
            <h6 class="card-text text-cenetr">
                This is a class project for the <a href='https://perscholas.org'>Per Scholas</a> React.js developer bootcamp
            </h6>
            <h4 class="card-title text-center fw-bold">Purpose</h4>
            <h5 class="card-text text-cenetr">
                I created an app to prompt users with a choice: either view a random image of a <span className='fw-bold'>cat, dog, duck, or fox</span>from a public API or learn about the plight of these animals in captivity.
            </h5>
            <h6 class="card-title text-center fw-bold mt-4">APIs Used</h6>
            <p class="card-text text-start">
                <ul>
                    <li>Random Fox Images <a href='https://randomfox.ca/'>https://randomfox.ca/</a></li>
                    <li>Random Cat Images<a href='https://thecatapi.com/'>'https://thecatapi.com/</a></li>
                    <li>Random Duck Images<a href='https://random-d.uk/api'>https://random-d.uk/api</a></li>
                    <li>Random Dog Images <a href='https://dog.ceo/'>https://dog.ceo/</a> </li>

                </ul>
            </p>
        </>

    )
}

export default LandingPage
