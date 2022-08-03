import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";

export default class App extends React.Component {
  state = {
    nameImage: '',
  }

  onSubmitForm = (name) => {
    
    this.setState({nameImage: name});
  };
  
  render() {
  return(
    <div>
      <Searchbar onSubmit={this.onSubmitForm} />
      <ToastContainer autoClose={3000} />
      <ImageGallery name={this.state.nameImage} />
    </div>
  );
};
}