import { Component } from "react";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import {Modal} from 'components/Modal/Modal'

export class App extends Component {
  state = {
    searchName: '',
    showModal: false,
    currentImageUrl: null,
    currentImageTag: null,
  }
  handleFormSubmit = (searchName) => {
    this.setState({searchName})
  }
  onToggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    };

  onOpenModal = event => {
        const currentImageUrl = event.target.dataset.large;
        const currentImageTag = event.target.alt;

        if (event.target.nodeName === 'IMG') {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
            currentImageUrl: currentImageUrl,
            currentImageTag: currentImageTag,
        }));
            console.log(event.target.nodeName)
            console.log(this.state.showModal)
        }
    };
  render() {
    const{showModal,
            currentImageUrl,
            currentImageTag } = this.state;
    return (
      <div>
        
          <Searchbar onSubmit={this.handleFormSubmit } />
        
        <ImageGallery searchName={this.state.searchName} onOpenModal={this.onOpenModal} />
        {showModal&&
         (<Modal
          onClose={this.onToggleModal}
          currentImageUrl={currentImageUrl}
           currentImageTag={currentImageTag}/>)
        }
      </div>)}
}
