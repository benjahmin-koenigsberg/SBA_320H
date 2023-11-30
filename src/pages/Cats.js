import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";




const Cats = () => {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const [image, setImage] = useState(null)
    const [text, setText] = useState('')

    const catUrl = 'https://corsproxy.io/?' + encodeURIComponent('https://api.thecatapi.com/v1/images/search');
    const labCatUrl = "https://res.cloudinary.com/dlqzrsajl/image/upload/v1701303668/IxWl7_kfjnnh.png"

    // const cld = new Cloudinary({ cloud: { cloudName: 'dlqzrsajl' } });
    // const myImage = cld.image('home/lab_cat');
    // myImage.resize(fill().width(250).height(250));


    async function getImg(url) {
        // const response = await axios.get(url)
        const response = await axios.get(url)
        const image = response.data[0] ? response.data[0].url : response.data
        setImage(image)

    }

    useEffect(() => {

        //console.log(image)
        getImg(catUrl)


    }, [])


    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true);
    }

    return (
        <>
            <div className='container text-center border border-1 border-black rounded p-4' style={{ height: '50vh' }}>
                <h3>Cats</h3>
                <div className='row' style={{ marginTop: '7vh' }}>
                    <div className='container text-center'>
                        <p className='w-75 m-auto' style={{ lineHeight: '2.5rem' }}>Cats have captured our hearts with their mysterious personalities and quirky behavior. From the flick of their tails to the arch of their backs, these feline creatures communicate a complex range of emotions, verbally and non-verbally to both their human companions and their fellow furry friends.</p>
                    </div>
                    <div className='col'>
                        <Button variant="primary" onClick={() => {
                            getImg(catUrl)
                            setText('Cats have captured our hearts with their mysterious personalities and quirky behavior. From the flick of their tails to the arch of their backs, these feline creatures communicate a complex range of emotions, verbally and non-verbally to both their human companions and their fellow furry friends. So, what exactly are their behaviors trying to tell us?')
                            handleShow()
                        }}>
                            FREE
                        </Button>
                    </div>
                    <div className='col'>
                        <Button variant='danger' onClick={() => {
                            setImage(labCatUrl)
                            setText('More than 19,000 cats are abused in U.S. laboratories every year—in addition to the tens of thousands who are killed and sold to schools for cruel and crude classroom dissections. These cats are just as deserving of fulfilling lives and loving homes as the feline companions who purr on our laps.')
                            handleShow()
                        }
                        }>CAPTIVE</Button>
                    </div>
                </div>
            </div>
            <div className='text-center mt-4' >
                <Button class="btn btn-primary" onClick={() => navigate('/dogs')}> Next </Button>
            </div>

            <Modal fullscreen={true} show={show} onHide={handleClose} className='text-center'>
                <Modal.Header>
                    <Modal.Title className='text-center'>CATS</Modal.Title>
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
