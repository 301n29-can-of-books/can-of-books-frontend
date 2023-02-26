import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import AddBookodal from './AddBookModal';
import Books from './Books';
import { withAuth0 } from '@auth0/auth0-react';

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
      const config = await this.getConfig();
      const response = await axios.get(url, config);//making a get request to the server, storing the data we get back into response
      this.setState({ books: response.data }); // this line is saving the data we get back from the database into the books state property
    } catch (error) {
      console.log(error);
    }
  }

  async getConfig() {
    try{
      if(this.props.auth0.isAuthenticated){
        const response = await this.props.auth0.getIdTokenClaims();
        const jwt = response.__raw;
        const config = {
          headers: {'Authorization': `Bearer ${jwt}`}
        };
        return config;
      }else{
        throw new Error('Not Authorized');
      }
    }
    catch(error){
      console.log(error);
    }
  }

  postBook = async (newBook) => {
    try {
      const config = await this.getConfig();
      let url = `${process.env.REACT_APP_SERVER}/books`;
      const response = await axios.post(url, newBook, config);
      this.setState({ books: [...this.state.books, response.data] });
    }
    catch (err) { console.error(err); }
  };

  deleteBook = async (_id) => {
    let url = `${process.env.REACT_APP_SERVER}/books/${_id}`;
    try {
      const config = await this.getConfig();
      await axios.delete(url, config);
      let updatedBooks = this.state.books.filter(book => book._id !== _id);
      this.setState({ books: updatedBooks });
    }
    catch (error) {
      console.log(error);
    }
  };

  putBook = async(updatedBooks) => {
    try{
      const config = await this.getConfig();
      let url = `${process.env.REACT_APP_SERVER}/books/${updatedBooks._id}`;
      await axios.put(url, updatedBooks, config);
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
        <AddBookodal
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

export default withAuth0(BestBooks);
