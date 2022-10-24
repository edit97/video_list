//Packages
import {connect} from "react-redux";
import {useEffect, useState} from "react";

//styles
import './saved-video-list.css';

//utils
import {mapStateToProps} from "../../redux/mapStateToProps";
import {GetSaveFrames} from "../../redux/actions";

//Components
import MediaModal from "../media-modal/MediaModal";

function SavedVideoList(props) {
    const {savedFrames} = props
    const [show, setShow] = useState(false);
    const [activeImage, setActiveImage] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (image) => {
        setShow(true)
        setActiveImage(image)
    };
    useEffect(() => {
        props.GetSaveFrames()
    }, [])

    return (
        !!savedFrames?.length &&   <div className="saved_videos">
            <h3>Saved</h3>
            <div className="saved_video_list">
                {
                    !!savedFrames?.length && savedFrames.map(item => {
                        return <div key={item.id}

                                    className={'list_item'}>
                            <img src={item?.path} alt=""
                                 className={'list_item_img'}
                                 onClick={()=>handleShow(item?.path)}/>
                            <span>{item?.file_name}</span>
                            <span>{item?.frame_number}</span>
                        </div>
                    })
                }
                <MediaModal show={show} handleClose={handleClose} image={activeImage}/>
            </div>
        </div>
    );
}

const mapDispatchToProps = {GetSaveFrames}
export default connect(mapStateToProps, mapDispatchToProps)(SavedVideoList)