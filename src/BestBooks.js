import React from 'react';
import axios from 'axios';
import Books from './Books';

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

  deleteBook = async (_id) => {
    let url = `${process.env.REACT_APP_SERVER}/books/${_id}`;
    try {
      await axios.delete(url);
      let updatedBooks = this.state.books.filter(book => book._id !== _id);
      this.setState({ books: updatedBooks });
    }
    catch (error) {
      console.log(error);
    }
  };

  render() {

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Books
            books={this.state.books}
            deleteBook={this.deleteBook}
          />
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
