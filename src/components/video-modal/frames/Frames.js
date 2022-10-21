//Packages
import {connect} from "react-redux";

//styles
import './frames.css'

//utils
import {mapStateToProps} from "../../../redux/mapStateToProps";
import {SaveFrames} from "../../../redux/actions";

//Components

function Frames(props) {
    const {frames, selectedFrames, selectFrame} = props

    return (
        <div className="frames">
            {
                !!frames?.frames?.length && frames?.frames?.map((item, index) => {
                    return <div className={`frame_item ${selectedFrames.find(i => i.id === item.id) ? 'selected_frame_item' : ''}`}
                                key={item.id}
                                onClick={() => selectFrame(item)}>
                        <img src={item?.path} alt="" className="frame_item_img"/>
                        <div className="frame_item_title">Кадр {frames.first_frame + index} </div>
                    </div>
                })
            }
        </div>
    );
}

const mapDispatchToProps = {SaveFrames}
export default connect(mapStateToProps, mapDispatchToProps)(Frames)