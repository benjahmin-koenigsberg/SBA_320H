import React from 'react'
import axios from 'axios'
import {useState , useEffect} from 'react'

const Foxes = () => {


  const [image, setImage] = useState('')

  useEffect(()=>{

    async function getImg() {
      const response = await axios.get('https://randomfox.ca/floof/')
      const image = response.data.image
      setImage(image)
      console.log(image)
    }

    getImg()

  },[])



  return (
    <div>
      <h3>Wolves</h3>
      <img src={image} className='image-thumbnail' />
    </div>
  )
}

export default Foxes
