//Packages
import {connect} from "react-redux";
import {useEffect, useState} from "react";

//styles
import './video-list.css';

//utils
import {mapStateToProps} from "../../redux/mapStateToProps";
import {GetVideos} from "../../redux/actions";

//Components
import VideoModal from "../video-modal/VieoModal";

function VideoList(props) {
    const {videos, savedFrames} = props
    const [show, setShow] = useState(false);
    const [activeVideo, setActiveVideo] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (video) => {
        setShow(true)
        setActiveVideo(video)
    };
    useEffect(() => {
        props.GetVideos()
    }, [])
    console.log(savedFrames, 'savedFrames');
    return (
        <div className="video_list">
            {
                !!videos?.length && videos.map(item => {
                    return <div key={item.id}
                                onClick={()=>handleShow(item)}
                                className={'list_item'}>
                        {item?.name}
                    </div>
                })
            }
            <VideoModal show={show} handleClose={handleClose} video={activeVideo}/>
        </div>
    );
}

const mapDispatchToProps = {GetVideos}
export default connect(mapStateToProps, mapDispatchToProps)(VideoList)