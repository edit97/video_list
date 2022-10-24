//styles
import './frames.css'


function Frames(props) {
    const {frames, selectedFrames, selectFrame} = props

    return (
        <div className="frames">
            {
                !!frames?.frames?.length && frames?.frames?.map((item, index) => {
                    return <div className={`frame_item`}
                                key={item.id}>
                        <img src={item?.path} alt="" className="frame_item_img"/>
                        <div className="frame_item_title">
                            <span>Кадр {frames.first_frame + index}</span>
                            <div onClick={() => selectFrame(item)}
                                className={`frame_item_checkbox ${selectedFrames.find(i => i.id === item.id) ? 'selected_frame_item' : ''}`}/>
                        </div>
                    </div>
                })
            }
        </div>
    );
}
export default Frames