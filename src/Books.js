import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import UpdateBookModal from './UpdateBookModal';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      showModal: false,
      bookToUpdate: {}
    };
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({ index: selectedIndex });
  };

  handleShowModal = (book) => this.setState({showModal: true, bookToUpdate: book});

  handleCloseModal = () => {
    this.setState({showModal: false});
  };

  render() {

    return (
      <>
        <Carousel
          activeIndex={this.state.index}
          onSelect={this.handleSelect}
          interval={null}
        >
          {this.props.books.map(book => (
            <Carousel.Item key={(book._id)}>
              <img
                className="d-block w-100"
                src='https://via.placeholder.com/800x300.png'
                alt={book.title}
              />
              <Carousel.Caption>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>{`Status: ${book.status}`}</p>
                <div className='text-center'>
                  <Button onClick={() => this.handleShowModal(book)}>Update Book</Button>
                  <Button onClick={() => {
                    this.props.deleteBook(book._id);
                    const currentIdx = this.state.index;
                    if(currentIdx === 0){
                      this.setState({ index: currentIdx + 1 });
                    }
                    else{
                      this.setState({ index: currentIdx - 1 });
                    }
                  }}>Delete Book</Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <UpdateBookModal
          show={this.state.showModal}
          close={this.handleCloseModal}
          putBook={this.props.putBook}
          bookToUpdate={this.state.bookToUpdate}/>
      </>
    );
  }
}

export default Books;
