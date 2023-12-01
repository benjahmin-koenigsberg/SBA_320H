import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import bluePill from '../images/blue_pill.png'
import redPill from '../images/red_pill.png'
import axios from 'axios';
import ModalComponent from './ModalComponent';
import Button from 'react-bootstrap/Button';
import { handleModal }  from '../controllers/modal'
import { getImg } from '../controllers/getImg';


const Card = ({ props }) => {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const [image, setImage] = useState('')
    const [text, setText] = useState('')


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
                            onClick={(e) => handleModal(e, props, setText, setImage, setShow)}>
                            <img src={bluePill} id="bluePill" style={{ height: '3.5rem', cursor: 'pointer' }} className='bg-transparent' />
                        </Button>
                        <Button variant="transparent"
                            onClick={(e) => handleModal(e, props, setText, setImage, setShow )}>

                            <img src={redPill} id="redPill" style={{ height: '3.5rem', cursor: 'pointer' }} className='bg-transparent' />
                        </Button>                    </div>
                </div>
            </div>
            <div className='text-center mt-4' >
                <Button variant='warning' onClick={() => navigate(props.navigateTo)}>Next ➡️</Button>
            </div>
            <ModalComponent name={props.name} image={image} text={text} show={show} setShow={setShow}  />
        </>
    )
}

export default Card
