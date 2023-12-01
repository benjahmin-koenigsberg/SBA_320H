import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import bluePill from '../images/blue_pill.png'
import redPill from '../images/red_pill.png'
import axios from 'axios';
import ModalComponent from './ModalComponent';
import Button from 'react-bootstrap/Button';



const Card = ({ props }) => {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const [image, setImage] = useState('')
    const [text, setText] = useState('')


    async function getImg(url, name) {
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


    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true);
    }


    const handleModal = (e) => {
        console.log(e.target.id)
        if (e.target.id === 'bluePill') {
            getImg(props.url, props.name)
            setText(props.blueText)
        } else {
            setImage(props.labUrl)
            setText(props.redText)
        }
        handleShow()

    }

    return (
        <>
            <div class="card text-center" >
                <h1 style={{ fontSize: '5rem' }}>{props.emoji}</h1>
                <img class="card-img-top" src={props.gif ? props.gif : ''} />
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.mainText}</p>
                    <div className='d-flex flex-row justify-content-around'>
                        <Button variant="transparent"

                            onClick={(e) => handleModal(e)}>
                            <img src={bluePill} id="bluePill" style={{ height: '3.5rem', cursor: 'pointer' }} className='bg-transparent' />
                        </Button>
                        <Button variant="transparent"
                            onClick={(e) => handleModal(e)}>
                            <img src={redPill} id="redPill" style={{ height: '3.5rem', cursor: 'pointer' }} className='bg-transparent' />
                        </Button>                    </div>
                </div>
            </div>
            <div className='text-center mt-4' >
                <Button variant='warning' onClick={() => navigate(props.navigateTo)}>Next ➡️</Button>
            </div>
            <ModalComponent name={props.name} image={image} text={text} show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} />

        </>
    )
}

export default Card
