import { Component } from 'react';
import { fetchImages } from './api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';

import './App.css';

class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    error: null,
    isLoading: false,
    modalImage: {},
    modalIsHidden: true,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.setState({ images: [] }, () => {
        this.loadImages(1);
      });
    }

    if (prevState.images !== this.state.images && this.state.page !== 1) {
      window.scrollTo({ top: document.body.clientHeight, behavior: 'smooth' });
      console.log(this.state.page)
    }
  };

  loadImages = (page) => {
    const { images, search } = this.state;
    this.setState({
      page,
      error: null,
      isLoading: true
    });

    fetchImages(search, page)
      .then((response) => {
        console.log(response)
        if (response.length === 0) {
          return Promise.reject(
            new Error(`There is no pictures by ${search} name, please try another request`));
        } else {
          this.setState({ images: [...(images || []), ...response] });
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleFormSubmit = (searchString) => {
    this.setState({ search: searchString });
  };

  handleToggleModalStatus = () => {
    this.setState(({ modalIsHidden }) => ({ modalIsHidden: !modalIsHidden }));
  };

  showModaHandlelClick = ({ modalImage }) => {
    this.setState({ modalImage: { ...modalImage } });
    this.handleToggleModalStatus();
  };

  loadMoreHandleClick = () => {
    this.loadImages(this.state.page + 1);
  };

  render() {
    const { images, isLoading, error, modalImage, modalIsHidden } = this.state;
    const { handleFormSubmit, showModaHandlelClick, handleToggleModalStatus, loadMoreHandleClick } = this;

    return (
      <>
        <Searchbar
          onSubmit={handleFormSubmit} />

        {error &&
          <h1>{error.message}</h1>}

        <ImageGallery
          images={images}
          onShowModal={showModaHandlelClick} />

        {isLoading &&
          <Loader />}

        {!!images.length && !isLoading &&
          <Button
            onClick={loadMoreHandleClick} />}

        {!modalIsHidden &&
          <Modal
            onToggleModalStatus={handleToggleModalStatus}
            modalImage={modalImage} />}
      </>
    );
  }
};

export default App;