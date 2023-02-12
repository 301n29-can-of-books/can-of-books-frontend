import React from 'react';
import { Carousel } from 'react-bootstrap';

class Book extends React.Component {
  render() {
    return (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`holder.js/800x400?text=${this.props.book.title}&bg=373940`}
          alt={this.props.book.title}
        />
        <Carousel.Caption>
          <h3>{this.props.book.title}</h3>
          <p>{this.props.book.description}.</p>
          <p>{`Status: ${this.props.book.status}`}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
}

export default Book;
