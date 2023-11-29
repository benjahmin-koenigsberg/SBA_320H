import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Dogs = () => {

  const [image, setImage] = useState('')

  useEffect(() => {

    async function getImg() {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random')
      const image = response.data.message
      setImage(image)
      //console.log(image)
    }

    getImg()

  }, [])


  return (
    <div>
      <h3>Dogs</h3>
      <img src={image} className='image-thumbnail'/>
    </div>
  )
}

export default Dogs
