import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import AddModal from './AddModal';
import Books from './Books';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
    };
  }

  componentDidMount() {
    this.getBooks();
  }

  handleShowModal = () => {
    this.setState({
      showModal: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  async getBooks() {
    let url = `${process.env.REACT_APP_SERVER}/books`; //the react_app_server is the base url, /books is the end point
    try {
      const response = await axios.get(url);//making a get request to the server, storing the data we get back into response
      this.setState({ books: response.data }); // this line is saving the data we get back from the database into the books state property
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

  putBook = async(updatedBooks) => {
    try{
      let url = `${process.env.REACT_APP_SERVER}/books/${updatedBooks._id}`;
      let response = await axios.put(url, updatedBooks);
      const updatedBooksArr = this.state.books.map(oldBook => updatedBooks._id === oldBook._id ? updatedBooks : oldBook);
      this.setState({books: updatedBooksArr});
    }
    catch(err){console.error(err);}
  };

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <img
          className="library-image"
          src={require('./images/library.jpg')}
          alt='cozy library'
        />
        <AddModal
          show={this.state.showModal}
          close={this.handleCloseModal}
          postBook={this.postBook}/>
        {this.state.books.length ? (
          <Books
            books={this.state.books}
            deleteBook={this.deleteBook}
            putBook={this.putBook}
          />
        ) : (
          <h3>No Books Found :(</h3>
        )}
        <Button onClick={this.handleShowModal}>Add Book</Button>
      </>
    );
  }
}

export default BestBooks;
