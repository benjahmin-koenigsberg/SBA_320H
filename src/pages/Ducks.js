import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Ducks = () => {

  const [show, setShow] = useState(false);
  const [image, setImage] = useState('')

  const navigate = useNavigate()

  const duckUrl = 'https://corsproxy.io/?' + encodeURIComponent('https://random-d.uk/api/random');
  const captiveDuckUrl = "https://res.cloudinary.com/dlqzrsajl/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1701303769/animal-equality-ban-foie-gras_cjfptz.jpg"

  async function getImg(url) {

    const response = await axios.get(url)
    const image = response.data.url
    //console.log(image)
   setImage(image)
  }

  useEffect(() => {
    getImg(duckUrl)
  }, [])


  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
  }

  return (
    <>
      <div className='container text-center border border-1 border-black rounded p-4' style={{ height: '50vh' }}>
        <h3>Ducks</h3>
        <div className='row' style={{ marginTop: '30vh' }}>
          <div className='col'>
            <Button variant="primary" onClick={()=>{
              getImg(duckUrl)
              handleShow() }}>
              FREE
            </Button>
          </div>
          <div className='col'>
            <Button variant="primary" onClick={() => {
              setImage(captiveDuckUrl)
              handleShow()
            }}>
              CAPTIVE
            </Button>
          </div>
        </div>
      </div>
      <div className='text-center mt-4' >
        <Button class="btn btn-primary" onClick={() => navigate('/dogs')}> Next </Button>
      </div>

      <Modal fullscreen={true} show={show} onHide={handleClose} className='text-center'>
        <Modal.Header>
          <Modal.Title className='text-center'>Ducks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={image} className='image-thumbnail' />
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

export default Ducks
