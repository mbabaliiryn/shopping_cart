import React from 'react';
import Footer from './Footer';
import ImageUploading, { ImageListType } from "react-images-uploading";
import { Button } from 'semantic-ui-react'

export default function Logistics(){

  const [images, setImages] = React.useState([]);
  const maxNumber = 100;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

    return(
        <div >
        <nav className="sticky-top">
          <input type="checkbox" id="check" />
            <label className="checkbtn">
              <i className="fas fa-bar"></i>
            </label>
          <ul>
            <li><a href="/">Logout</a></li>
          </ul>
        </nav>
        <div className="container d-flex pl-5">
          <div className="col d-flex ml-5">
          <div className="row mr-5 ">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper ">
            <button className="ui button"
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              create truck
            </button>
            &nbsp;
            {/* <button onClick={onImageRemoveAll} className="ui button mt-3">Remove all trucks</button> */}
            <div className="container">
                <div className="row ">
                    <div className="col md-3 ">
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.dataURL} alt="" width="200" height="200" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)} className="ui button">Update</button>
                  <button onClick={() => onImageRemove(index)} className="ui button">Remove</button>
                </div>
              </div>
            ))}
            </div>
            </div>
            </div>
          </div>
        )}
      </ImageUploading>
      </div>
      {/* 2rd row */}
      <div className="row mr-5">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper ">
            <button className="ui button"
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              create truck
            </button>
            &nbsp;
            {/* <button onClick={onImageRemoveAll} className="ui button mt-3">Remove all trucks</button> */}
            <div className="container">
                <div className="row ">
                    <div className="col md-3 ">
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.dataURL} alt="" width="200" height="200"  />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)} className="ui button">Update</button>
                  <button onClick={() => onImageRemove(index)} className="ui button">Remove</button>
                </div>
              </div>
            ))}
            </div>
            </div>
            </div>
          </div>
        )}
      </ImageUploading>
      </div>
      {/* 3rd row */}
      <div className="row ">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper ">
            <button className="ui button"
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              create truck
            </button>
            &nbsp;
            {/* <button onClick={onImageRemoveAll} className="ui button mt-3">Remove all trucks</button> */}
            <div className="container">
                <div className="row ">
                    <div className="col md-3 ">
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.dataURL} alt="" width="200" height="200"  />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)} className="ui button">Update</button>
                  <button onClick={() => onImageRemove(index)} className="ui button">Remove</button>
                </div>
              </div>
            ))}
            </div>
            </div>
            </div>
          </div>
        )}
      </ImageUploading>
      </div>
      {/* 4nd row */}
      <div className="row ml-5">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper ">
            <button className="ui button"
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              create truck
            </button>
            &nbsp;
            {/* <button onClick={onImageRemoveAll} className="ui button mt-3">Remove all trucks</button> */}
            <div className="container">
                <div className="row ">
                    <div className="col md-3 ">
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.dataURL} alt="" width="200" height="200" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)} className="ui button">Update</button>
                  <button onClick={() => onImageRemove(index)} className="ui button">Remove</button>
                </div>
              </div>
            ))}
            </div>
            </div>
            </div>
          </div>
        )}
      </ImageUploading>
      </div>
      

      </div>
    </div>  
      <Footer />
        </div>
    )
}