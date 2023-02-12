import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import Book from './Book';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    this.getBooks();
  }

  async getBooks() {
    let url = `${process.env.REACT_APP_SERVER}/books`;
    try {
      const response = await axios.get(url);
      this.setState({ books: response.data }, () => console.log(this.state.books));
    } catch (error) {
      console.log(error);
    }
  }

  render() {

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Carousel>
            {this.state.books.map(book => (
              <Book key={book._id}
                book={book}/>
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
