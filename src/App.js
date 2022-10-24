import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import VideoList from "./components/video-list/VieoList";
import SavedVideoList from "./components/saved-video-list/SavedVieoList";

function App(props) {
  return (
    <div className="App">
        <VideoList/>
        <SavedVideoList/>
    </div>
  );
}

export default App;
