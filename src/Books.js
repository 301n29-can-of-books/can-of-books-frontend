import React from 'react';
import { Button, Carousel } from 'react-bootstrap';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({ index: selectedIndex });
  };

  render() {

    return (
      <Carousel
        activeIndex={this.state.index}
        onSelect={this.handleSelect}
      >
        {this.props.books.map(book => (
          <Carousel.Item key={(book._id)}>
            <img
              className="d-block w-100"
              // src="holder.js/800x400?text=first slide&bg=373940"
              src='https://via.placeholder.com/800x400.png'
              alt={book.title}
            />
            <Carousel.Caption>
              <h3>{book.title}</h3>
              <p>{book.description}.</p>
              <p>{`Status: ${book.status}`}</p>
            </Carousel.Caption>
            <div className='text-center'>
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
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default Books;
