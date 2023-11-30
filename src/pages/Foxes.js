
import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import bluePill from '../images/blue_pill.png'
import redPill from '../images/red_pill.png'


const Foxes = () => {


  const navigate = useNavigate()

  const [show, setShow] = useState(false);
  const [image, setImage] = useState('')
  const [text, setText] = useState('')


  const foxUrl = 'https://randomfox.ca/floof/'
  const captiveFoxUrl = 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701362670/Quebec-Fur-Farm-2022-Fox-2_mhwjd7.jpg'

  async function getImg(url) {
    // const response = await axios.get(url)
    const response = await axios.get(url)
    const image = response.data.image
    setImage(image)
  }

  useEffect(() => {

    //console.log(image)
    getImg(foxUrl)


  }, [])


  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
  }

  return (
    <>
      <div className='container text-center border border-1 border-black rounded p-4' style={{ minHeight: '50vh' }}>
        <h3>Foxes</h3>
        <h1 style={{ fontSize: '5rem' }}>🦊</h1>

        <div className='row' style={{ marginTop: '7vh' }}>
          <div className='container text-center'>
            <p className='w-75 m-auto' style={{ lineHeight: '2.5rem' }}>A fox is believed to be a very intelligent and clever animal. 37 species are referred to as foxes, but only 12 species actually belong to the Vulpes genus of ‘true foxes’. Every fox belongs to the canine family, and they are ranked as the smallest of all canines. However, they have some characteristics different from other canines</p>
          </div>

          <div className='col mt-4'>
            <Button variant="transparent" onClick={() => {
              getImg(foxUrl)
              setText('These animals are very social and live flexible lives. They are found all over the world — in North America, Europe, Asia and North Africa — and call a wide range of terrains their home. They also eat a greatly varied diet.')
              handleShow()
            }}>
              <img src={bluePill} style={{ height: '3.5rem', cursor: 'pointer' }} className='bg-transparent' />
            </Button>
          </div>
          <div className='col mt-4'>
            <Button variant='transparent' onClick={() => {
              setImage(captiveFoxUrl)
              setText('It can take between 10 to 24 foxes or 36 to 65 minks to produce a single fur coat. On fur farms, millions of wild animals like minks, foxes, rabbits, chinchillas, raccoon and dogs are bred into terrible conditions. Destined to spend their whole lives in cramped wire cages, they are then killed using brutal methods. It’s standard in the fur industry to kill foxes by anal electrocution... All in the name of fashion. ')
              handleShow()
            }}>
              <img src={redPill} style={{ height: '3.5rem', cursor: 'pointer' }} className='bg-transparent' />
            </Button>
          </div>
        </div>
      </div>
      <div className='text-center mt-4' >
        <Button variant="dark" onClick={() => navigate('/ducks')}>Ducks ➡️</Button>
      </div>

      <Modal fullscreen={true} show={show} onHide={handleClose} className='text-center'>
        <Modal.Header >
          <Modal.Title className='text-center m-auto'>Foxes</Modal.Title>
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


export default Foxes
