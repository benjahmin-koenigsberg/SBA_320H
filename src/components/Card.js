import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import bluePill from '../images/blue_pill.png'
import redPill from '../images/red_pill.png'
import ModalComponent from './ModalComponent';
import Button from 'react-bootstrap/Button';
import { handleModal } from '../controllers/modal'


const Card = ({ props }) => {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const [image, setImage] = useState('')
    const [text, setText] = useState('')


    return (
        <>
            <div class="card text-center" >
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <h1 style={{ fontSize: '5rem' }}>{props.emoji}</h1>
                    <p class="card-text">{props.mainText}</p>
                    <div className='d-flex flex-row justify-content-around'>
                        <Button variant="transparent"
                            onClick={(e) => handleModal(e, props, setText, setImage, setShow)}>
                            <img src={bluePill} id="bluePill" style={{ height: '3.5rem', cursor: 'pointer' }} className='bg-transparent' alt='blue pill' />
                        </Button>
                        <Button variant="transparent"
                            onClick={(e) => {
                                window.alert("⚠️ Warning! Graphic image...")
                                handleModal(e, props, setText, setImage, setShow)
                            } }>

                            <img src={redPill} id="redPill" style={{ height: '3.5rem', cursor: 'pointer' }} className='bg-transparent' alt="red pill" />
                        </Button>                    </div>
                </div>
            </div>
            <div className='text-center mt-4' >
                <Button variant='warning' onClick={() => navigate(props.navigateTo)}>Next ➡️</Button>
            </div>
            <ModalComponent name={props.name} image={image} text={text} show={show} setShow={setShow} />
        </>
    )
}

export default Card
