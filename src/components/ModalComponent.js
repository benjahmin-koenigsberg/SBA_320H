import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Image } from 'react-bootstrap';






const ModalComponent = ({ name, image, text, show, handleClose }) => {


    return (
        <Modal fullscreen={true} show={show} onHide={handleClose} className='text-center'>
            <Modal.Header>
                <Modal.Title className='m-auto'>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className='img-thumbnail' src={image} />
                <p className='modal-body'>{text}</p>
            </Modal.Body>
            <Modal.Footer className='m-auto'>
                <Button variant="secondary" onClick={handleClose} >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalComponent
