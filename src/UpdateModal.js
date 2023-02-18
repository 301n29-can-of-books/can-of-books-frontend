import React from 'react';
import { Button, Form, Modal,} from 'react-bootstrap';

class UpdateModal extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const status = e.target.status.checked ? 'Complete' : 'Incomplete';
    const updatedBook ={
      title: e.target.title.value || this.props.bookToUpdate.title,
      description: e.target.description.value || this.props.bookToUpdate.description,
      status: status || this.props.bookToUpdate.status,
      _id: this.props.bookToUpdate._id
    };
    this.props.putBook(updatedBook);
    e.target.reset();
  };

  render() {
    return (
      <Modal show={false}
        onHide={this.props.close}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Title>Book Title</Modal.Title>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Book Title</Form.Label>
              <Form.Control type="text" placeholder={this.props.bookToUpdate.title}/>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Book description</Form.Label>
              <Form.Control type="text" placeholder={this.props.bookToUpdate.description}/>
            </Form.Group>
            <Form.Group controlId="status">
              <Form.Check
                type="checkbox"
                label="Completed"
                defaultValue={this.props.bookToUpdate.status === 'Complete' ? true : false}/>
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

export default UpdateModal;
