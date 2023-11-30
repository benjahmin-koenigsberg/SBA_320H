import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import bluePill from '../images/blue_pill.png'
import redPill from '../images/red_pill.png'


const Ducks = () => {

  const [show, setShow] = useState(false);
  const [image, setImage] = useState('')
  const [text, setText] = useState('')


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
      <div className='text-center border border-1 border-black rounded p-4 main-frame' >
        <h3>Ducks</h3>
        <h1 style={{ fontSize: '5rem' }}>🦆</h1>

        <div className='row' style={{ marginTop: '7vh' }}>

          <div className='container text-center'>
            <p className='w-75 m-auto' style={{ lineHeight: '2.5rem' }}>Ducks are outgoing, social animals who feel most at ease when they're in a larger group of other ducks. Ducks can live up to 20 years, depending on the species and if well cared for. Ducks, in particular, have been domesticated to be exploited for their feathers, eggs and meat.</p>
          </div>

          <div className='col mt-4'>
            <Button variant="transparent" onClick={()=>{
              getImg(duckUrl)
              setText('Ducks are highly intelligent and emotional creatures. They can understand commands, play with toys, play games, give kisses, and beg for snuggles like other birds if you get to know them.')
              handleShow() }}>
              <img src={bluePill} style={{ height: '3.5rem', cursor: 'pointer' }} className='bg-transparent' />
            </Button>
          </div>
          <div className='col mt-4'>
            <Button variant="transparent" onClick={() => {
              setImage(captiveDuckUrl)
              setText("Foie gras, French for 'fat liver' is the liver of a duck or a goose that has been specially fattened by forced feeding. Upon hatching, the ducks are separated into males and females. The females are killed right away, because the structure of their liver makes them unsuitable for the forced feeding process. The males are cruelly debeaked in order to avoid too many losses due to fighting. A duck's liver naturally weighs around 50 grams.However, to qualify as foie gras, the industry's own regulations require ducks' livers to weigh an absolute minimum of 300 grams. The vast amounts of feed pumped down the ducks' throats causes enormous internal pressure, and the pipe sometimes punctures the esophagus, causing many to die from choking on the blood that fills their lungs. Some birds literally burst or choke to death on their own vomit. Other ducks die a slow, painful, and premature death by suffocation from inhalation of regurgitated feed.")
              handleShow()
            }}>
              <img src={redPill} style={{ height: '3.5rem', cursor: 'pointer' }} className='bg-transparent' />
            </Button>
          </div>
        </div>
      </div>
      <div className='text-center mt-4' >
        <Button variant='warning' onClick={() => navigate('/cta')}>Next ➡️</Button>
      </div>

      <Modal fullscreen={true} show={show} onHide={handleClose} className='text-center'>
        <Modal.Header>
          <Modal.Title className='m-auto'>Ducks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={image} className='img-thumbnail' style={{ maxHeight: '55vh' }} />
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

export default Ducks
