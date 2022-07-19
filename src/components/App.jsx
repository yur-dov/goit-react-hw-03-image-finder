import React, {Component} from "react";
import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import css from './app.module.css'
import Loader from './Loader/Loader'
import Button from './Button/Button'
import Modal from './Modal/Modal'

const APIKEY = '27774085-63dd68fde82b68f2a8f1036fc'

export default class App extends Component {
  state = {
    name: '',
    page: 1,
    totalImages: 0,
    loading: false,
    images: [],
    largeImageUrl: '',
    tag: '',
  }  

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.name !== this.state.name ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.state.name}&page=${this.state.page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(image => {
            this.setState(prevState => ({
            images: [...prevState.images, ...image.hits],
            totalImages: image.total,
          })
          );
        })
        .catch(error => error)
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }
  
  showImage = (name) => {
    this.setState({ name, images: [], page: 1})
  }

  handleImgClick = (largeImageUrl, tag) => {
    this.setState({largeImageUrl, tag});
    this.toggleModal();
  }

  toggleModal=()=> {
    this.setState(({showModal}) => ({
    showModal: !showModal,
  }))}
  
  loadMore = () => {
    this.setState((prevState) => ({
    page: prevState.page + 1
    }));
  }

  render() {
        const {
      images, 
      largeImageUrl, 
      showModal,
      tag
        } = this.state;

    return (
      <div className={css.divBox}>

        <Searchbar showImage={this.showImage} />

         {images.length !== 0 && <ImageGallery 
        images={images} 
        onImgClick={this.handleImgClick}
        />}

        {this.state.loading && <Loader />}

        {images.length !== 0   && <Button 
        onClick={this.loadMore}
        />} 

        {showModal && <Modal onClose={this.toggleModal}>
          <img width={800} src={ largeImageUrl } alt={tag} />
        </Modal> } 
   
    </div>
  );
};
}