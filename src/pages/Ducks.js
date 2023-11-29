import {useState, useEffect} from 'react'
import axios from 'axios'

const Ducks = () => {

  const [image, setImage] = useState('')

  useEffect(()=>{

    const url = 'https://corsproxy.io/?' + encodeURIComponent('https://random-d.uk/api/random');

    async function getImg() {
    const response = await axios.get(url)
    const image = response.data.url
    console.log(image)
   setImage(image)

    }
    getImg()

  },[])

  return (
    <div>
      <h3>Ducks</h3>
      <img src={image} className='image-thumbnail' />
    </div>  )
}

export default Ducks
