//Packages
import {connect} from "react-redux";
import {useState} from "react";

//styles
import './video-modal.css';

//utils
import {mapStateToProps} from "../../redux/mapStateToProps";
import {GetFrames, SaveFrames} from "../../redux/actions";

//Components
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import Player from "./player/Player";
import Frames from "./frames/Frames";

function VideoModal(props) {
    const {show, handleClose, video} = props
    const [frames, setFrames] = useState(null)
    const [selectedFrames, setSelectedFrames] = useState([])

    const getFramesData = (data) => {
        setFrames(data)
    }

    const selectFrame = (item) => {
        let newList = selectedFrames.includes(item)
            ? selectedFrames.filter(i => i.id !== item.id) : [...selectedFrames, item]
        setSelectedFrames(newList)
    }

    const closeModal = () => {
        handleClose()
        setFrames(null)
        setSelectedFrames([])
    }

    const saveFrames = () => {
        handleClose()
        props.SaveFrames(selectedFrames)
    }

    return <Modal show={show} onHide={closeModal} size="lg">
        <Modal.Header closeButton/>
        <Modal.Body>
            {
                !frames ? <Player video={video} getFramesData={getFramesData}/>
                    : <Frames frames={frames} selectedFrames={selectedFrames} selectFrame={selectFrame}/>
            }
        </Modal.Body>
        {frames && <Modal.Footer>
            <Button variant="secondary" onClick={saveFrames}>
                Save Changes
            </Button>
        </Modal.Footer>}
    </Modal>;
}

const mapDispatchToProps = {GetFrames, SaveFrames}
export default connect(mapStateToProps, mapDispatchToProps)(VideoModal)