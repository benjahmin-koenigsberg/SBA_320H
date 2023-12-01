
import {getImg} from './getImg'

const handleClose = (setShow) => {
    setShow(false);
}

const handleShow = async (setShow) => {
    setShow(true)
}

const handleModal = (e, props, setText, setImage, setShow) => {
    console.log(e.target.id)
    if (e.target.id === 'bluePill') {
        getImg(props.url, props.name, setImage)
        setText(props.blueText)
    } else {
        setImage(props.labUrl)
        setText(props.redText)
    }
    handleShow(setShow)
}

export {handleModal, handleClose, handleShow}
