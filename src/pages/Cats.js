import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import bluePill from '../images/blue_pill.png'
import redPill from '../images/red_pill.png'




const Cats = () => {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const [image, setImage] = useState(null)
    const [text, setText] = useState('')

    const catUrl = 'https://corsproxy.io/?' + encodeURIComponent('https://api.thecatapi.com/v1/images/search');
    const labCatUrl = "https://res.cloudinary.com/dlqzrsajl/image/upload/v1701303668/IxWl7_kfjnnh.png"


    async function getImg(url) {
        // const response = await axios.get(url)
        const response = await axios.get(url)
        const image = response.data[0] ? response.data[0].url : response.data
        setImage(image)

    }

    useEffect(() => {

        getImg(catUrl)

    }, [])


    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true);
    }

    return (
        <>
            <div className='container text-center border border-1 border-black rounded p-4' style={{ minHeight: '50vh' }}>
                <h3>Cats</h3>
                <h1 style={{fontSize: '5rem'}}>🐈</h1>

                <div className='row' style={{ marginTop: '7vh' }}>
                    <div className='container text-center'>
                        <p className='w-75 m-auto' style={{ lineHeight: '2.5rem' }}>Cats have captured our hearts with their mysterious personalities and quirky behavior. From the flick of their tails to the arch of their backs, these feline creatures communicate a complex range of emotions, verbally and non-verbally to both their human companions and their fellow furry friends.</p>
                    </div>

                    <div className='col mt-4'>
                        <Button variant='transparent'  onClick={() => {
                            getImg(catUrl)
                            setText('Cats have captured our hearts with their mysterious personalities and quirky behavior. From the flick of their tails to the arch of their backs, these feline creatures communicate a complex range of emotions, verbally and non-verbally to both their human companions and their fellow furry friends. So, what exactly are their behaviors trying to tell us?')
                            handleShow()
                        }}>
                            <img src={bluePill} style={{ height: '3.5rem', cursor: 'pointer'  }} className='bg-transparent' />
                        </Button>
                    </div>
                    <div className='col mt-4'>
                        <Button variant='transparent' onClick={() => {
                            setImage(labCatUrl)
                            setText('More than 19,000 cats are abused in U.S. laboratories every year—in addition to the tens of thousands who are killed and sold to schools for cruel and crude classroom dissections. These cats are just as deserving of fulfilling lives and loving homes as the feline companions who purr on our laps.')
                            handleShow()
                        }
                        }>
                            <img src={redPill} style={{ height: '3.5rem', cursor: 'pointer' }} className='bg-transparent' />

                        </Button>
                    </div>
                </div>
            </div>
            <div className='text-center mt-4' >
                <Button variant='warning' onClick={() => navigate('/dogs')}>DOGS ➡️</Button>
            </div>

            <Modal fullscreen={true} show={show} onHide={handleClose} className='text-center'>
                <Modal.Header>
                    <Modal.Title className='m-auto'>CATS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={image} className='img-thumbnail' />
                    <p className='modal-body'>{text}</p>
                </Modal.Body>
                <Modal.Footer className='m-auto'>
                    <Button variant="secondary" onClick={handleClose} >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}







export default Cats
