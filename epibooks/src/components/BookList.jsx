import { Component } from 'react';
import CommentArea from './CommentArea';
import SingleBook from './SingleBook'
import {Container, Col, Form, Row } from 'react-bootstrap'

class BookList extends Component {
  state = {
    searchQuery: '',
    bookSelected: null
  }

   
  sendData = (value) => {
    this.setState({ bookSelected: value });
  };

  componentDidUpdate = (prevProps, prevState ) => {
    if (prevState.bookSelected !== this.state.bookSelected)  {
      this.sendData(this.state.bookSelected)
    } 
  }

  render() {
    return (
      <>
        <Container xs={12} md={8}>
           <Row>
            <Form.Group>
              <Form.Label>Search a book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
            </Row>
            <Row>
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
              <Col xs={12} md={4} key={b.asin}>
                <SingleBook 
                book={b}
                asin={b.asin}
                parentCallBack={this.sendData}
                setSelectedBookAsin = {this.state.bookSelected}
                 />
              </Col>
            ))}
            </Row>

          </Container>
          <Container xs={12} md={6}>
              <CommentArea asin={this.state.bookSelected}></CommentArea>
        </Container>
      </>
    )
  }
}

export default BookList
