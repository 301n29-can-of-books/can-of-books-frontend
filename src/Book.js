import React from 'react';
import { Carousel } from 'react-bootstrap';

class Book extends React.Component {
  render() {
    return (
      <Carousel>
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
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default Book;
