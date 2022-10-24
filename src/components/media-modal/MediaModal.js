//styles
import './media-modal.css'

//Components
import Modal from "react-bootstrap/Modal";

function MediaModal(props) {
    const {show, handleClose, image} = props

    const closeModal = () => {
        handleClose()
    }


    return <Modal show={show} onHide={closeModal} size="lg">
        <Modal.Header closeButton/>
        <Modal.Body>
            <img src={image} alt="" className={'frame_image'}/>
        </Modal.Body>
    </Modal>;
}

export default MediaModal