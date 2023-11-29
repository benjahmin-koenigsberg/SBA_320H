import { useState, useEffect } from 'react'
import axios from 'axios'

const Cats = () => {


const [image, setImage] = useState('')

useEffect(()=>{

    async function getImg() {
        const url = 'https://corsproxy.io/?' + encodeURIComponent('https://api.thecatapi.com/v1/images/search');
        const response = await axios.get(url)
        const image = response.data[0].url
        setImage(image)
        //console.log(image)
    }

    getImg()
},[])




    return (
        <div>
            <h3>Cats</h3>
            <img src={image} className='image-thumbnail' />
        </div>
    )
}

export default Cats
