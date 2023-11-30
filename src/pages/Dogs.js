import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import bluePill from '../images/blue_pill.png'
import redPill from '../images/red_pill.png'

const Dogs = () => {


  const navigate = useNavigate()

  const [show, setShow] = useState(false);
  const [text, setText] = useState('')
  const [image, setImage] = useState('')

  const dogUrl = 'https://dog.ceo/api/breeds/image/random'
  const captiveDogUrl = 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701308447/PETA-Puppy-Mill-Investigation-9_p7ybqn.jpg'

  async function getImg(url) {
    const response = await axios.get(url)
    const image = response.data.message
    setImage(image)
    //console.log(image)
  }

  useEffect(() => {

    getImg(dogUrl)

  }, [])


  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
  }

  return (
    <>
      <div className='container text-center border border-1 border-black rounded p-4' style={{ minHeight: '50vh' }}>
        <h3>Dogs</h3>
        <h1 style={{ fontSize: '5rem' }}>🐕</h1>

        <div className='row' style={{ marginTop: '7vh' }}>
          <div className='container text-center'>
            <p className='w-75 m-auto' style={{ lineHeight: '2.5rem' }}>Today, 73.9 million dogs are owned in the United States alone.1 These extremely popular pets have enjoyed a long relationship with humans. In fact, the modern-day dog is descended from the first animal species that humans domesticated. However, there is still some debate as to whether that species was the dog or the wolf. So you may ask yourself how did dogs become domesticated, and what exactly does domestication mean?</p>
          </div>

          <div className='col mt-4'>
            <Button variant="transparent" onClick={() => {
              getImg(dogUrl)
              setText('Dogs are the most popular pet on the planet! A third of ALL households around the world have a dog.These playful, friendly, loyal animals make great companions, but they can also be fierce and tough protectors, or intelligent helpers.')
              handleShow()
            }}>
              <img src={bluePill} style={{ height: '3.5rem', cursor: 'pointer' }} className='bg-transparent' />
            </Button>
          </div>
          <div className='col mt-4'>
            <Button variant='transparent' onClick={() => {
              setImage(captiveDogUrl)
              setText('There’s no excuse for bringing more puppies into the world. On any given day in the U.S., an estimated 70 million homeless dogs and cats are struggling to survive. Of the millions of animals who enter shelters each year, about half must be euthanized for humane reasons or because no suitable homes exist for them. Every time a dog is bred, homeless dogs lose the opportunity to have a good life.')
              handleShow()
            }}>
              <img src={redPill} style={{ height: '3.5rem', cursor: 'pointer' }} className='bg-transparent' />
              </Button>
          </div>
        </div>
      </div>
      <div className='text-center mt-4' >
        <Button variant='dark' onClick={() => navigate('/foxes')}>Foxes ➡️</Button>
      </div>

      <Modal fullscreen={true} show={show} onHide={handleClose} className='text-center'>
        <Modal.Header className='text-center'>
          <Modal.Title className='m-auto' >DOGS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={image} className='img-thumbnail' style={{maxHeight: '55vh'}} />
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

export default Dogs
