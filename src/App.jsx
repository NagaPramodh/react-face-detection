import { useEffect, useState } from "react";
import "./app.css";
import Navbar from "./components/Navbar";
import NewPost from "./components/NewPost";
import Modal from '@material-ui/core/Modal';

function App() {
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [open, setOpen] = useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };
    
  const handleOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    const getImage = () => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        setImage({
          url: img.src,
          width: img.width,
          height: img.height,
        });
      };
    };

    file && getImage();
  }, [file]);

  return (
    <div>
      <Navbar text="Face Recognisition App"/>
      {/* <button type="button" 
      onClick={handleOpen}>
        Click Me to Open Modal
      </button> */}
      <Modal
        onClose={handleClose}
        open={open}
        style={{
          // position: 'absolute',
          // border: '2px solid #000',
          // backgroundColor: 'white',
          // boxShadow: '2px solid black',
          // height:80,
          // width: 240,
          // margin: 'auto'
          position:'fixed',
          left:0,
          right:0,
          top:0,
          bottom:0,
          backgroundColor:"white",
          display:"flex",
          justifyContent:'center',
          alignItems:"center"
        }}
      >
        <h2>You have succesfully Posted</h2>
      </Modal>
      {image ? (
        <NewPost image={image} send={handleOpen} />
      ) : (
        <div className="newPostCard">
          <div className="addPost">
            <img
              src="https://images.pexels.com/photos/9371782/pexels-photo-9371782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
            <div className="postForm">
              <input
                type="text"
                placeholder="What's on your mind?"
                className="postInput"
              />
              <label htmlFor="file">
                <img
                  className="addImg"
                  src="https://cdn.icon-icons.com/icons2/564/PNG/512/Add_Image_icon-icons.com_54218.png"
                  alt=""
                />
                <img
                  className="addImg"
                  src="https://icon-library.com/images/maps-icon-png/maps-icon-png-5.jpg"
                  alt=""
                />
                <img
                  className="addImg"
                  src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84451/preview.svg"
                  alt=""
                />
                <button></button>
              </label>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                id="file"
                style={{ display: "none" }}
                type="file"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
