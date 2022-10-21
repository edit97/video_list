import './App.css';

function App(props) {
  return (
    <div className="App">
        {/*<img src={`${process.env.PUBLIC_URL}/assets/frames/video1/img1.jpg`} alt=""/>*/}
        Videos list

        {
            !!videos?.length && videos.map(item => {
                return <div style={{padding: '20px'}} key={item.id}>{item?.name}</div>
            })
        }
        {/*<video controls={true}*/}
        {/*       id="video1"*/}
        {/*       width="420"*/}
        {/*       src={`${process.env.PUBLIC_URL}/${videos[1].path}`}/>*/}
    </div>
  );
}

export default App;
