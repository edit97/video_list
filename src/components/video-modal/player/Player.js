//Packages
import {connect} from "react-redux";
import {useEffect, useRef, useState} from "react";

//utils
import {mapStateToProps} from "../../../redux/mapStateToProps";
import {GetFrames} from "../../../redux/actions";

//Components

function Player(props) {
    const {video} = props
    const videoEl = useRef(null);
    const [paused, setPaused] = useState(false)
    const [seconds, setSeconds] = useState(0)

    const togglePause = () => {
        setPaused(!paused)
        setSeconds(Math.ceil(videoEl.current.currentTime))
    }

    const getFrames = () => {
        props.GetFrames(video.name, seconds).then((data) => {
            props.getFramesData(data)
        })
    }

    return (
        <div className="player">
            <video controls
                   autoPlay
                   id="video1"
                   width="760"
                   ref={videoEl}
                   src={video.path}
                   onPause={togglePause}
                   onPlay={togglePause}
            />
            {!paused && <button className="frames_btn"
                                onClick={getFrames}>Frames</button>}
        </div>
    );
}

const mapDispatchToProps = {GetFrames}
export default connect(mapStateToProps, mapDispatchToProps)(Player)