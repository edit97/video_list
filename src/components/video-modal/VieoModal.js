import {connect} from "react-redux";
import {useEffect} from "react";

import './video-list.css';

import {mapStateToProps} from "../../redux/mapStateToProps";
import {GetVideos} from "../../redux/actions";

function VideoList(props) {
    const {videos} = props
    useEffect(() => {
        props.GetVideos()
    }, [])

    return (
        <div className="video_list">
            {
                !!videos?.length && videos.map(item => {
                    return <div style={{padding: '20px'}}
                                key={item.id}
                                className={'list_item'}>
                        {item?.name}
                    </div>
                })
            }
        </div>
    );
}

const mapDispatchToProps = {GetVideos}
export default connect(mapStateToProps, mapDispatchToProps)(VideoList)