import axios from 'axios'


async function getImg(url, name, setImage) {
    let image;
    const response = await axios.get(url)
    if (name === 'Cats')
        image = response.data[0] ? response.data[0].url : response.data
    else if (name === 'Dogs')
        image = response.data.message
    else if (name === 'Foxes')
        image = response.data.image
    else
        image = response.data.url
    setImage(image)
}


export {getImg}
