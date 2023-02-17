import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Book from './Book';
import BookFormModal from './BookFormModal';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBookFormModal: false,

    };
  }

  componentDidMount() {
    this.getBooks();
  }

  handleShowBookFormModal = () => {
    this.setState({
      showBookFormModal: true,
    });
  };

  handleCloseBookFormModal = () => {
    this.setState({
      showBookFormModal: false,
    });
  };

  async getBooks() {
    let url = `${process.env.REACT_APP_SERVER}/books`; //the react_app_server is the base url, /books is the end point
    try {
      const response = await axios.get(url);//making a get request to the server, storing the data we get back into response
      this.setState({ books: response.data }, () => console.log(this.state.books)); // this line is saving the data we get back from the database into the books state property
    } catch (error) {
      console.log(error);
    }
  }

  postBook = async (newBook) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      const response = await axios.post(url, newBook);
      this.setState({ books: [...this.state.books, response.data] });
    }
    catch (err) { console.error(err); }
  };

  render() {

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        <BookFormModal
          show={this.state.showBookFormModal}
          close={this.handleCloseBookFormModal}
          postBook={this.postBook}/>
        {this.state.books.length ? (
          <Book books={this.state.books}/>
        ) : (
          <h3>No Books Found :(</h3>
        )}
        <Button onClick={this.handleShowBookFormModal}>Add Book</Button>
      </>
    );
  }
}

export default BestBooks;
