import React from 'react';
import { Button, Form } from 'react-bootstrap';

class BookFormModal extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const newBook ={
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.checked
    };
    this.props.postBook(newBook);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Book Title</Form.Label>
          <Form.Control type="text" placeholder="Book title here..."/>
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Book description</Form.Label>
          <Form.Control type="text" placeholder="Book description here..."/>
        </Form.Group>
        <Form.Group controlId="status">
          <Form.Check type="checkbox" label="Completed"/>
        </Form.Group>
        <Button type='submit'>Add Book</Button>
      </Form>
    );
  }
}

export default BookFormModal;
