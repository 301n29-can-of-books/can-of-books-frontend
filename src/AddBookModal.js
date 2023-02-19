import React from 'react';
import { Button, Form, Modal,} from 'react-bootstrap';

class AddBookodal extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const status = e.target.status.checked ? 'Complete' : 'Incomplete';
    const newBook ={
      title: e.target.title.value,
      description: e.target.description.value,
      status: status
    };
    this.props.postBook(newBook);
    e.target.reset();
  };

  render() {
    return (
      <Modal show={this.props.show}
        onHide={this.props.close}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Title>Book Title</Modal.Title>
        <Modal.Header></Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddBookodal;
