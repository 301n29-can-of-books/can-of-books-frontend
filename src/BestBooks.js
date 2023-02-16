import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import Book from './Book';
import BookFormModal from './BookFormModal';

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
    let url = `${process.env.REACT_APP_SERVER}/books`; //the react_app_server is the base url, /books is the ened point
    try {
      const response = await axios.get(url);//making a get request to the server, storing the data we get back into response
      this.setState({ books: response.data }, () => console.log(this.state.books)); // this line is saving the data we get back from the database into the books state property
    } catch (error) {
      console.log(error);
    }
  }

  postBook = async (newBook) =>{
    try{
      let url = `${process.env.REACT_APP_SERVER}/books`;
      const config = {
        data: newBook
      };
      const response = await axios.post(url, config);
      console.log(response.data);
      this.setState({books: [...this.state.books, response.data]});
    }
    catch(err){console.error(err);}
  };

  render() {

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        <BookFormModal postBook={this.postBook}/>
        {this.state.books.length ? (
          // <Carousel>
          //   {this.state.books.map(book => (
          //     <Book key={book._id}
          //       book={book}/>
          //   ))}
          // </Carousel>
          <Book books={this.state.books}/>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
